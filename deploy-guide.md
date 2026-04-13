# Deploy to GitHub Pages — Step by Step

**Prerequisites:** Your repo must be public (or you need GitHub Pro for private repos with Pages).

---

## 1. Install `gh-pages`
```bash
npm install gh-pages
```

---

## 2. Set the `base` in `vite.config.ts`
```ts
base: '/your-repo-name/'
```
This must match your **repo name exactly** — GitHub Pages always serves at `https://<username>.github.io/<repo-name>/`.
Without this, assets load broken.

---

## 3. Create the GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## 4. Enable GitHub Pages (first time only)

Go to your repo on GitHub:
> **Settings → Pages → Source → select "GitHub Actions" → Save**

---

## 5. Push to main

```bash
git push origin main
```

Every push to `main` triggers the workflow automatically. No manual deploy command needed.

---

## Result
Your app will be live at:
```
https://<your-github-username>.github.io/<repo-name>/
```
