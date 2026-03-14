# Deploy to GitHub Pages

Your SLAB Vite app is configured for GitHub Pages deployment.

## Option 1: GitHub Actions (automatic)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main` or `master`.

1. **Enable GitHub Pages** in your repo:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Deploy"
   git push origin main
   ```

3. The workflow runs automatically. Check **Actions** for status.

4. Site URL: `https://<username>.github.io/SriLankansAtBerkeley/`

## Option 2: Manual deploy with npm

1. **Deploy**:
   ```bash
   npm run deploy
   ```

2. **Enable GitHub Pages** in your repo:
   - **Settings** → **Pages** → Source: **Deploy from a branch**
   - Branch: `gh-pages` → Save

## Repo Name

If your repo has a **different name** than `SriLankansAtBerkeley`, update `vite.config.js`:

```js
base: '/your-repo-name/',  // must include leading and trailing slash
```

## Troubleshooting

- **404 on refresh / direct link to /blog**: The `postbuild` script copies `index.html` to `404.html` so GitHub Pages serves the SPA for all routes.
- **Blank page or broken assets**: Ensure `base` in `vite.config.js` matches your repo name exactly.
- **First deploy**: Allow a few minutes for GitHub Pages to build. Check **Actions** tab for deploy status.
