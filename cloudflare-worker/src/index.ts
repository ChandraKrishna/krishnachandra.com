export interface Env {
  MAILJET_API_KEY: string;
  MAILJET_SECRET_KEY: string;
  MAILJET_SENDER_EMAIL: string;
  MAILJET_SENDER_NAME: string;
  CONTACT_TO_EMAIL: string;
  ALLOWED_ORIGINS: string;
}

type ContactPayload = { name?: unknown; email?: unknown; phone?: unknown; subject?: unknown; message?: unknown; website?: unknown; consent?: unknown };

const jsonHeaders = { 'Content-Type': 'application/json; charset=UTF-8' };

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character] ?? character));
}

function corsHeaders(origin: string | null, env: Env) {
  const allowedOrigins = env.ALLOWED_ORIGINS.split(',').map(value => value.trim());
  if (!origin || !allowedOrigins.includes(origin)) return null;
  return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' };
}

function response(body: Record<string, unknown>, status: number, cors: Record<string, string> | null) {
  return Response.json(body, { status, headers: { ...jsonHeaders, ...(cors ?? {}) } });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const cors = corsHeaders(origin, env);

    if (request.method === 'OPTIONS') return cors ? new Response(null, { status: 204, headers: cors }) : new Response(null, { status: 403 });
    if (!cors) return response({ error: 'This origin is not allowed.' }, 403, null);
    if (request.method !== 'POST') return response({ error: 'Method not allowed.' }, 405, cors);

    const payload = await request.json().catch(() => null) as ContactPayload | null;
    const name = typeof payload?.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload?.email === 'string' ? payload.email.trim() : '';
    const phone = typeof payload?.phone === 'string' ? payload.phone.trim() : '';
    const subject = typeof payload?.subject === 'string' ? payload.subject.trim() : '';
    const message = typeof payload?.message === 'string' ? payload.message.trim() : '';

    if (!payload || payload.website || payload.consent !== true || !name || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return response({ error: 'Please complete the required fields and use a valid email address.' }, 400, cors);
    }

    const textPart = `New website enquiry\n\nName: ${name}\nEmail: ${email}\nMobile number: ${phone || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const htmlPart = `<!doctype html><html lang="en"><body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#172235;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f1f5f9;padding:32px 16px;"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dbe4ef;"><tr><td style="padding:32px 36px;background:#101827;"><p style="margin:0 0 10px;color:#22d3ee;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">New web enquiry</p><h1 style="margin:0;color:#ffffff;font-size:28px;line-height:36px;font-weight:700;">${escapeHtml(subject)}</h1><p style="margin:14px 0 0;color:#94a3b8;font-size:15px;line-height:24px;">A new message was submitted through krishnachandra.com.</p></td></tr><tr><td style="padding:32px 36px 12px;"><p style="margin:0 0 16px;color:#0f172a;font-size:16px;font-weight:700;">Contact details</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e2e8f0;border-radius:12px;"><tr><td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:34%;">Name</td><td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;color:#172235;font-size:14px;font-weight:600;">${escapeHtml(name)}</td></tr><tr><td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;">Email</td><td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;color:#172235;font-size:14px;font-weight:600;"><a href="mailto:${escapeHtml(email)}" style="color:#0891b2;text-decoration:none;">${escapeHtml(email)}</a></td></tr><tr><td style="padding:14px 16px;color:#64748b;font-size:13px;">Mobile number</td><td style="padding:14px 16px;color:#172235;font-size:14px;font-weight:600;">${escapeHtml(phone || 'Not provided')}</td></tr></table><p style="margin:28px 0 12px;color:#0f172a;font-size:16px;font-weight:700;">Message</p><div style="padding:20px;background:#f8fafc;border-left:4px solid #22d3ee;border-radius:0 10px 10px 0;color:#334155;font-size:15px;line-height:24px;">${escapeHtml(message).replace(/\n/g, '<br>')}</div></td></tr><tr><td style="padding:28px 36px 32px;"><a href="mailto:${escapeHtml(email)}?subject=Re%3A%20${encodeURIComponent(subject)}" style="display:inline-block;padding:13px 20px;background:#22d3ee;border-radius:999px;color:#082f49;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${escapeHtml(name)}</a><p style="margin:24px 0 0;color:#94a3b8;font-size:12px;line-height:18px;">This email was sent from the krishnachandra.com contact form.</p></td></tr></table></td></tr></table></body></html>`;
    const credentials = btoa(`${env.MAILJET_API_KEY}:${env.MAILJET_SECRET_KEY}`);

    try {
      const mailjetResponse = await fetch('https://api.mailjet.com/v3.1/send', { method: 'POST', headers: { Authorization: `Basic ${credentials}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ Messages: [{ From: { Email: env.MAILJET_SENDER_EMAIL, Name: env.MAILJET_SENDER_NAME }, To: [{ Email: env.CONTACT_TO_EMAIL }], ReplyTo: { Email: email, Name: name }, Subject: `[Web-Enquiry] : ${subject}`, TextPart: textPart, HTMLPart: htmlPart }] }) });
      if (!mailjetResponse.ok) {
        console.error('Mailjet rejected submission:', mailjetResponse.status);
        return response({ error: 'Unable to send your message. Please try again later.' }, 502, cors);
      }
    } catch (error) {
      console.error('Mailjet request failed:', error);
      return response({ error: 'Unable to send your message. Please try again later.' }, 502, cors);
    }

    return response({ ok: true }, 200, cors);
  },
};
