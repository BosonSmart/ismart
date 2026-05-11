# Boson Smart Phase 1 Website

A Vite + React single-page website for Boson Smart Phase 1 smart home packages.

## Features

- Bilingual EN / Traditional Chinese toggle
- Three Phase 1 package cards
- Apple-style package builder
- Live estimated total price
- Auto-filled email enquiry link
- Trust, scope, scenario, comparison, process, pre-visit questions, and FAQ sections
- GitHub Pages deployment workflow included

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This project includes `.github/workflows/deploy.yml`.

After pushing to GitHub:

1. Go to repository **Settings**
2. Open **Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main`
5. GitHub Actions will deploy the built site
