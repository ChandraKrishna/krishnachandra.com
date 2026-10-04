# Krishna Chandra Portfolio

Production-oriented personal portfolio built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Before deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
2. Confirm the inferred 2024 start date for the current role.
3. Add a verified email, GitHub profile, portrait, or résumé only when those assets are available.

## Deploy to GitHub Pages with Mailjet contact delivery

The portfolio remains a static GitHub Pages site. Its contact form sends requests to the separate Cloudflare Worker in `cloudflare-worker/`, which stores the Mailjet credentials securely.

1. In `cloudflare-worker/`, run `npm install`, then copy `.dev.vars.example` to `.dev.vars` and add the Mailjet values for local Worker testing.
2. Log in to Cloudflare and run `npm run deploy` from `cloudflare-worker/`. Note the deployed Worker URL, for example `https://krishnachandra-com.<account>.workers.dev`.
3. In the Cloudflare Worker dashboard, add the same five Mailjet values as encrypted secrets: `MAILJET_API_KEY`, `MAILJET_SECRET_KEY`, `MAILJET_SENDER_EMAIL`, `MAILJET_SENDER_NAME`, and `CONTACT_TO_EMAIL`.
4. In GitHub, add a repository variable named `CONTACT_ENDPOINT` with the Worker URL plus `/contact`. For this deployment, use `https://krishnachandra-com.krishnachandraofficial.workers.dev/contact`.
5. Push to `main`. The GitHub Pages workflow builds the static `out/` folder and publishes it with the public endpoint embedded in the form.

The Worker accepts submissions only from `krishnachandra.com`, `www.krishnachandra.com`, and local development. Add another origin to `cloudflare-worker/wrangler.jsonc` before deploying if you need one.
