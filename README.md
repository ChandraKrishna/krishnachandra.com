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

1. Replace all `TODO:` values in `src/content`.
2. Add a professional portrait under `public/images/profile` and wire it into `HeroSection.tsx`.
3. Add `public/documents/krishna-chandra-resume.pdf`.
4. Configure a real email provider in `src/app/api/contact/route.ts`.
5. Set `NEXT_PUBLIC_SITE_URL` in production.
6. Add verified role dates, achievements, education and certifications.

## Deploy

Recommended: Vercel. Also compatible with Docker or Node hosting using `npm run build && npm start`.
