# Deploy to GitHub Pages

## Step 1: Set up GitHub Pages

1. Go to your repo: **https://github.com/Santhusha-bit/SriLankansAtBerkeley**
2. Click **Settings** → **Pages**
3. Under **Source**, choose **Deploy from a branch**
4. Under **Branch**, select **gh-pages** and **/ (root)**
5. Click **Save**

## Step 2: Enable workflow permissions

1. **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Click **Save**

## Step 3: Push to trigger deploy

```bash
git add .
git commit -m "Deploy"
git push origin main
```

The workflow runs on push to `main` (or `master`). After 1-2 minutes, your site will be at:

**https://santhusha-bit.github.io/SriLankansAtBerkeley/**

## Manual deploy (alternative)

```bash
npm run deploy
```

Then ensure **Settings** → **Pages** → Source is **Deploy from a branch** → **gh-pages**.
