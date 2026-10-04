"use client";

import { useState } from "react";

type ContactPayload = { name: string; email: string; phone: string; subject: string; message: string; website: string; consent: boolean };

const fieldClass = "mt-2 w-full rounded-xl border border-slate-500/40 bg-slate-950/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/15";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload: ContactPayload = { name: String(formData.get("name") ?? "").trim(), email: String(formData.get("email") ?? "").trim(), phone: String(formData.get("phone") ?? "").trim(), subject: String(formData.get("subject") ?? "").trim(), message: String(formData.get("message") ?? "").trim(), website: String(formData.get("website") ?? "").trim(), consent: formData.get("consent") === "on" };

    setIsSubmitting(true);
    setStatus("Sending your message...");
    try {
      const response = await fetch("/api/contact/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setStatus(result?.error ?? "Please check the form and try again.");
        return;
      }
      setStatus("Thank you. Your message has been sent successfully.");
      formElement.reset();
    } catch {
      setStatus("Unable to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return <form onSubmit={submit} className="grid gap-6"><input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-slate-300">Name<input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} /></label><label className="text-sm text-slate-300">Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-slate-300">Mobile number <span className="text-slate-500">(optional)</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Your mobile number" className={fieldClass} /></label><label className="text-sm text-slate-300">Subject<input name="subject" required placeholder="How can we help?" className={fieldClass} /></label></div><label className="text-sm text-slate-300">Message<textarea name="message" required rows={6} placeholder="Tell us a little about your project..." className={fieldClass} /></label><label className="flex items-start gap-3 text-sm leading-6 text-slate-400"><input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-500 bg-slate-950 accent-cyan-400" /><span>I consent to being contacted regarding this enquiry.</span></label><div className="flex flex-wrap items-center gap-4"><button type="submit" disabled={isSubmitting} className="button-primary disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Sending..." : "Send message"}</button><p aria-live="polite" className="text-sm text-slate-400">{status}</p></div></form>;
}
