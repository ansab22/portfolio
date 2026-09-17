# Muhammad Ansab — Portfolio

A React + Vite portfolio site, built to deploy on Vercel.

## Edit your content

Almost everything on the site (name, bio, skills, experience, projects, contact links)
lives in one file: `src/data.js`. Open it and edit the text directly — no need to touch
any component files unless you want to change layout.

To swap the profile photo, replace `src/assets/profile.jpg` with your own image
(keep the same filename, or update the import in `src/components/Hero.jsx`).

Contact section: update `contact.email`, `contact.upwork`, and `contact.fiverr` in
`src/data.js` with your real email and profile links.

## Set up the contact form (required — one-time, 1 minute)

The contact form sends messages straight to your inbox with no backend or
database, using a free service called Web3Forms:

1. Go to https://web3forms.com
2. Enter your email — `muhammadansab210@gmail.com` — and click "Create Access Key".
3. Web3Forms emails you an **access key** immediately (no account/signup needed).
4. Open `src/data.js`, find `web3formsAccessKey`, and paste your key in place of
   `'YOUR_WEB3FORMS_ACCESS_KEY'`.
5. That's it. Every form submission on your site will now land directly in your
   Gmail inbox as an email, with the sender's name, email, and message.

Until you add the key, the form will show a friendly error asking people to
email you directly instead — so don't skip this step before deploying.

## Run it locally

```bash
npm install
npm run dev
```

This starts a local dev server (usually at http://localhost:5173).

## Deploy to Vercel

**Option A — with the Vercel CLI**
1. Install the CLI once: `npm install -g vercel`
2. From this project folder, run: `vercel`
3. Follow the prompts (log in / create account if needed, accept the defaults —
   Vercel auto-detects Vite).
4. Run `vercel --prod` to push it live.

**Option B — with GitHub (recommended for ongoing updates)**
1. Push this project to a new GitHub repository.
2. Go to https://vercel.com and sign in (GitHub login is easiest).
3. Click "Add New… → Project", then import your GitHub repo.
4. Vercel will auto-detect the Vite framework preset — Build Command `vite build`,
   Output Directory `dist`. Leave these as-is.
5. Click "Deploy". Your site will be live at a `*.vercel.app` URL in about a minute.
6. Every time you push to your GitHub repo's main branch afterward, Vercel
   redeploys automatically.

Once deployed, you can add a custom domain from the Vercel dashboard under
Project → Settings → Domains.

## Project structure

```
src/
  assets/
    profile.jpg           — your headshot
    projects/              — full-page screenshots used in the project cards
    certs/                 — certificate image
  components/              — one component per section
  data.js                  — all site content + the Web3Forms access key
  App.jsx                  — assembles the sections
  index.css                — full design system and styles
```
