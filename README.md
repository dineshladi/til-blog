# TIL Blog

A "Today I Learned" blog inspired by [Simon Willison](https://til.simonwillison.net/).

🔗 **Live Site**: https://dineshladi.github.io/til-blog

## Features

- ✍️ Markdown support with frontmatter
- 🏷️ Tag-based organization
- 💻 Code syntax highlighting
- 📐 LaTeX math support
- 🚀 GitHub Pages deployment
- 📡 Atom/RSS feed

## Prerequisites

You need **Node.js** (v18 or higher) and npm installed.

### Installing Node.js

**macOS (using Homebrew):**
```bash
brew install node
```

**Ubuntu/Debian:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows:**
Download from [nodejs.org](https://nodejs.org)

**Verify installation:**
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

## Setup Instructions

### 1. Clone and navigate to the project

```bash
cd til
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally (development mode)

```bash
npm run dev
```

Open your browser to: http://localhost:4321/til-blog

The site will auto-reload when you make changes.

### 4. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the static site.

### 5. Preview production build locally

```bash
npm run preview
```

## Adding TIL Posts

Create a new `.md` file in `src/content/til/`:

```markdown
---
title: "Your TIL Title"
date: 2026-02-09
tags: ["javascript", "python"]
---

Your content here...

## Code Example

```python
def hello():
    return "Hello, World!"
```

## Math Example

Inline: $E = mc^2$

Block:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

## Deployment to GitHub Pages

### First-time setup:

1. **Create a new GitHub repository** named `til-blog`

2. **Push your code:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/dineshladi/til-blog.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to "GitHub Actions"
   - Save

4. **Done!** The workflow will automatically deploy your site on every push to `main`

Your blog will be live at: `https://dineshladi.github.io/til-blog`

### Updating your blog:

Just commit and push - deployment is automatic!

```bash
git add .
git commit -m "Added new TIL about React hooks"
git push
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Get help with Astro CLI |

## Project Structure

```
til/
├── src/
│   ├── content/til/       # Your TIL posts (Markdown files)
│   ├── layouts/           # Page layouts (Astro components)
│   ├── pages/             # Site pages and routes
│   └── styles/            # Global CSS styles
├── .github/workflows/     # GitHub Actions for auto-deployment
├── public/                # Static assets
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies
```

## Customization

### Change the site URL

Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/til-blog',
  // ...
});
```

### Change your name in the feed

Edit `src/pages/feed.xml.ts`:
```typescript
<author>
  <name>Your Name</name>
</author>
```

### Add your own TIL posts

Simply create new `.md` files in `src/content/til/`. Each post needs frontmatter:
- `title`: The post title
- `date`: Publication date (YYYY-MM-DD format)
- `tags`: Array of topic tags

## Tips

- Posts are sorted by date (newest first)
- Tags automatically create filterable topic pages
- Code blocks use GitHub Dark theme
- Math renders via KaTeX (LaTeX syntax)
- Draft posts: add `draft: true` to frontmatter

## License

MIT
