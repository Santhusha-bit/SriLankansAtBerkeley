# Sri Lankans at Berkeley (SLAB)

Official website of the Sri Lankans at UC Berkeley

## Deploy to GitHub Pages

```bash
npm install
npm run deploy
```

Then in your repo: **Settings** → **Pages** → Source: **Deploy from branch** → Branch: `gh-pages` → Save.

See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

## Development

```bash
npm install
npm run dev
```

## How to add a new blog post 

The blog is a simple list stored in one file. When you add a new entry there, it shows up on the **Blog** page and can appear in the **Blogs** preview on the home page.

### What you need

- A short **title** and a **short summary** (1–3 sentences) for the listing.
- A **date** readers will see (for example: `Mar 5, 2026`).
- A **category** label (for example: `Events`, `Culture`, `Announcements`).
- About how long it takes to read (for example: `5 min`).
- The **author** name or team name (for example: `SLAB Editorial Team`).
- A **cover photo** for the card (JPG or PNG is fine).

### Step 1: Add your photo to the project

1. Put your image file in the `**images`** folder (or a subfolder inside it, such as `images/projects/awurudu/`).
2. Use a clear file name, for example: `my-event-photo.jpg`.

### Step 2: Open the blog list file

1. In the project folder, go to `**src**` → `**data**`.
2. Open `**blogPosts.js**` in any text editor.

### Step 3: Tell the site about your photo (one line at the top)

At the **very top** of `blogPosts.js`, you will see lines like:

```text
import cover1 from '../../images/projects/awurudu/DSC_0251.jpg'
```

Add **one new line** for your picture. Copy an existing line, change the name (for example `cover10`) and the path to your file:

```js
import cover10 from '../../images/projects/awurudu/my-event-photo.jpg'
```

- `**cover10**` is just a label used inside this file; pick the next number that is not already used (if the last one is `cover9`, use `cover10`).
- The path after `from` must match where you saved the file, starting from `**images**`.

### Step 4: Add your new post to the list

Scroll down to `**export const blogPosts = [**`. You will see blocks that look like this:

```js
  {
    id: 1,
    title: 'Your title here',
    date: 'MAr 31, 2026',
    excerpt: 'A short summary that appears on the blog card.',
    category: 'Events',
    readTime: '4 min',
    author: 'Amisha Gupta',
    image: cover1,
  },
```

1. Copy **one full block** (from `{` through `},`).
2. Paste it **after** the last post, **before** the closing `]`.
3. Edit the new block:
  - `**id`**: use a new number that no other post uses (for example, if the highest `id` is `9`, use `10`).
  - `**title**`: your headline in quotes.
  - `**date**`: the date string you want shown.
  - `**excerpt**`: your short summary in quotes. If it contains an apostrophe (`'`), use **double quotes** on the outside instead, like `"We're excited..."`.
  - `**category`**, `**readTime**`, `**author**`: update as you like.
  - `**image**`: set to the same name you used in Step 3 (for example `cover10`).
4. Save the file.

### Step 5: Put the site online (if you use GitHub)

If your team updates the live site through GitHub:

1. Commit the saved `blogPosts.js` and any new image files.
2. Push to the main branch (or follow your usual process). If you use automatic deployment, the site will rebuild with the new post.

If someone else deploys for you, send them the updated files or ask them to pull your changes.

### Tips

- **Home page “Blogs” section** shows the **first three** posts from this list (in the order they appear). To change which three show up, change the **order** of posts in `blogPosts.js` (newest posts are often moved to the top of the list).
- There is no separate “full article” page yet: the **Blog** page shows the title, summary, and cover image for each post. Longer stories can be linked elsewhere (Google Doc, Instagram, etc.) later if you add that feature.

---

