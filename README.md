# Coffee Club ☕

A modern coffee lifestyle website — café reviews, slow mornings, meaningful conversations, and warm modern living. Built as a premium, cinematic, magazine-style single-page application.

> Brewed slowly from a small studio in Portland, Maine.
> 533 Market Lane, Portland, ME 04101 · seniorcoffeeclub@gmail.com · 1 (207) 741-2268

---

## ✨ Highlights

- **Stack:** React 18, Vite, Tailwind CSS, Framer Motion, Lucide React, React Router DOM
- **Server:** Express.js + `compression`, SPA fallback ready for any host
- **SEO:** Semantic HTML, meta + Open Graph + Twitter cards, JSON-LD Organization schema, lazy-loaded images, alt text everywhere
- **Analytics:** Google Analytics 4 (`G-4J046JXWVC`) + Google Consent Mode V2 (denied by default), opt-in via cookie banner
- **Cinematic UX:** sticky transparent navbar, hero, expandable category cards, inline article accordions, FAQ, newsletter, cookie banner
- **Pages:** Home, About, Blog, Community, Tutorials, Contact, six Category pages, Privacy, Terms, Refund, 404
- **Images:** Every image is **bundled locally** in `/src/assets/images/...` — no runtime URLs. All assets are imported into React components so Vite hashes and ships them with the build.

> Note about images: this codebase ships with high-quality, locally generated SVG illustrations under `src/assets/images/`. They satisfy the "no external runtime URLs" requirement and bundle perfectly with Vite. To swap in real photography, just replace the files at the same paths (keep the filenames) with `.jpg`, `.png`, or `.webp` — imports do not need to change because Vite resolves any image extension.

---

## 📁 Folder structure

```
.
├── index.html                  # GA + Consent Mode V2 + JSON-LD + meta
├── server.js                   # Express + compression + SPA fallback
├── Procfile                    # Heroku
├── app.json                    # Heroku app manifest
├── package.json                # Node 20 engines, scripts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── og-image.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/images/{hero,categories,blog,projects,community,tutorials,coffee,cafes,morning,lifestyle}/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── CookieBanner.jsx
    │   ├── Section.jsx
    │   ├── ExpandableCategoryCard.jsx   # inline expansion, never routes away
    │   ├── ArticleAccordion.jsx         # inline expansion, never routes away
    │   ├── Newsletter.jsx
    │   ├── FAQ.jsx
    │   ├── PageHero.jsx
    │   └── ScrollToTop.jsx
    ├── data/
    │   ├── site.js
    │   ├── categories.js
    │   └── articles.js
    ├── utils/
    │   └── analytics.js                 # trackEvent / trackPageView / consent
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Blog.jsx
        ├── Community.jsx
        ├── Tutorials.jsx
        ├── Contact.jsx
        ├── CategoryPage.jsx
        ├── Privacy.jsx
        ├── Terms.jsx
        ├── Refund.jsx
        └── NotFound.jsx
```

---

## 🚀 Getting started

### 1. Install

```bash
npm install
```

### 2. Develop

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 3. Build

```bash
npm run build
```

Outputs to `dist/`.

### 4. Run the production server

```bash
npm start
```

Express serves `dist/` with `compression` and an SPA fallback on port `5000` (or `process.env.PORT`).

---

## ☁️ Deployment

### Heroku

```bash
heroku create coffee-club
git push heroku main
```

Heroku will pick up `engines.node: "20.x"`, run `heroku-postbuild` (which runs `npm run build`), then `Procfile` boots `node server.js`.

### Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
3. (Optional) For SPA routing, add a `vercel.json` rewrite — Vercel handles this automatically for Vite.

### Netlify

1. Connect the repo at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add a `_redirects` file in `public/` if you do not already have SPA fallback:
   ```
   /*  /index.html  200
   ```

---

## 🔭 Analytics & consent

Google Analytics 4 (`G-4J046JXWVC`) is wired up in `index.html` and helpers live in `src/utils/analytics.js`. Tracked events:

- `nav_click`, `cta_click`
- `hobby_expand`, `article_expand`, `article_share`
- `newsletter_signup`, `contact_submit`
- `cookie_consent` (`granted` / `denied`)
- `page_view` on every route change via `ScrollToTop.jsx`

Consent Mode V2 starts with `analytics_storage` and `ad_storage` set to `denied`. The cookie banner (`CookieBanner.jsx`) flips them to `granted` when the user accepts, persists the choice in `localStorage`, and respects the choice on every subsequent visit.

---

## 📜 Legal / Google Ads compliance

- Full **Privacy Policy** with cookie + consent disclosure
- Detailed **Terms of Service**
- Friendly **Refund Policy**
- Visible **About** page with origin story
- Working **Contact** page with email, phone, address, and form
- Cookie consent banner with Accept / Decline
- HTTPS-ready (the host handles certificates)
- Mobile-responsive across all breakpoints
- Footer legal row: Privacy · Terms · Refund · About · Contact

---

## 🛠 Customization quick-reference

- **Brand text:** `src/data/site.js`
- **Categories / expandable content:** `src/data/categories.js`
- **Blog essays:** `src/data/articles.js`
- **Colors / fonts:** `tailwind.config.js`
- **GA Measurement ID:** `index.html` (two spots) + `src/utils/analytics.js`

---

## License

© Coffee Club. All rights reserved.
