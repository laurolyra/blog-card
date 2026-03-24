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
This tells Vite the correct root path for assets. Without it, the page loads blank.

---

## 3. Add a `deploy` script to `package.json`
```json
"deploy": "npm run build && gh-pages -d dist"
```
This builds the app and pushes the `dist/` folder to the `gh-pages` branch of your repo.

---

## 4. Run the deploy
```bash
npm run deploy
```
That's it. It builds, then publishes automatically.

---

## 5. Enable GitHub Pages (first time only)
Go to your repo on GitHub:
> **Settings → Pages → Branch → select `gh-pages` → Save**

After that, every `npm run deploy` updates the live site without touching this setting again.

---

## Result
Your app will be live at:
```
https://<your-github-username>.github.io<base-path>
```
