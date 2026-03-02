# Sparks Setup Guide

Welcome to Sparks! This is your lightweight microblog for capturing learning moments.

## Installation (5 minutes)

```bash
# Install dependencies
bun install

# Start the dev server
bun dev

# Open http://localhost:3000
```

You should see the homepage with your first spark!

---

## What's Included

✅ **Astro 5** - Fast, static-first blog framework
✅ **TypeScript** - Strict mode for safety
✅ **Markdown content** - Simple, version-controlled posts
✅ **Dark mode** - Automatic with `prefers-color-scheme`
✅ **Beans task tracking** - Manage features and improvements
✅ **CLAUDE.md workflow** - Complete development guide

---

## Next Steps (Choose One)

### Option 1: Start Writing (Recommended)

```bash
# Create your first spark
touch src/content/sparks/learning-moment.md
```

Edit with this template:
```markdown
---
title: "Your Learning Moment"
description: "Brief summary"
pubDate: 2026-03-02
tags: ["your-topic"]
draft: false
---

Write about what you learned. Keep it short (100-300 words).
```

Then run `bun dev` and refresh your browser to see it appear!

### Option 2: Explore the Code

- **`src/pages/index.astro`** - Homepage
- **`src/layouts/Layout.astro`** - Base layout and global styles
- **`src/content/sparks/`** - Your blog posts
- **`astro.config.mjs`** - Astro configuration
- **`CLAUDE.md`** - Complete workflow guide

### Option 3: Plan a Feature

Create a beans task:
```bash
beans create --type feature --title "Add tags page" --priority medium
```

See `CLAUDE.md` for the complete workflow.

---

## Project Structure

```
sparks/
├── src/
│   ├── content/sparks/        # Your blog posts (.md files)
│   ├── layouts/Layout.astro   # Base template
│   ├── pages/index.astro      # Homepage
│   └── content/config.ts      # Content schema
├── docs/
│   ├── brainstorms/           # Feature exploration
│   ├── plans/                 # Implementation plans
│   └── learnings/             # Retrospectives and notes
├── .beans/                    # Task tracking files
├── CLAUDE.md                  # Development guide
├── OPTIMIZATIONS.md           # Feature tracking
└── README.md                  # Project overview
```

---

## Key Commands

```bash
# Development
bun dev              # Start dev server (http://localhost:3000)
bun build            # Build for production (creates dist/)
bun run preview      # Preview production build locally

# Code quality
bun lint             # Run ESLint
bun format           # Format with Prettier

# Task management
beans create         # Create new task
beans tui            # Browse tasks interactively
beans list           # List all tasks
```

---

## Writing Your First Spark

A spark is a brief learning moment. Here's a good structure:

```markdown
---
title: "What I Learned About X"
pubDate: 2026-03-02
tags: ["topic"]
---

**The insight**: One sentence summary.

**Why it matters**: Why you found this useful.

**How to use it**: Code snippet or practical example.

**What's next**: Related learnings to explore.
```

Keep it to **100-300 words**. More than that, it's an essay, not a spark.

---

## Deployment

### Build for production

```bash
bun build
# Output goes to dist/
```

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Done! (Auto-deploys on push)

### Deploy to Netlify

Same process as Vercel.

### Deploy to GitHub Pages

See Astro docs for static hosting setup.

---

## File Structure for Posts

**Good spark**:
- `src/content/sparks/learned-about-astro-hydration.md`
- 150 words
- 3 tags
- Published today

**Avoid**:
- `src/content/sparks/my-blog-post.md` (use descriptive names)
- 5000 words (that's an essay)
- No tags (hard to find later)
- `draft: true` (unpublished posts)

---

## Customization

### Colors

Edit `.src/layouts/Layout.astro`:

```css
:root {
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --color-accent: #ff6b35;
}
```

### Typography

Modify global styles in `Layout.astro`:

```css
html {
  font-family: /* your fonts */;
  font-size: 16px;
  line-height: 1.6;
}
```

### Layout

Add new pages to `src/pages/`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="My New Page">
  <h1>Page content here</h1>
</Layout>
```

---

## Workflow (When You're Ready)

See [CLAUDE.md](./CLAUDE.md) for complete workflow:

1. **Brainstorm** a feature → `/docs/brainstorms/`
2. **Plan** the implementation → `/docs/plans/`
3. **Create** a beans task → `beans create`
4. **Implement** in a feature branch
5. **Test** locally with `bun dev`
6. **Commit** with beans ID
7. **Deploy** to production

---

## Troubleshooting

### Dev server won't start

```bash
bun install
bun dev
```

### Content not appearing

- Check file is in `src/content/sparks/`
- Verify `draft: false` in frontmatter
- Ensure `pubDate` is formatted as `YYYY-MM-DD`

### Build fails

Check for:
- Invalid YAML in frontmatter
- Typos in `pubDate` field
- Syntax errors in Astro files

### Changes not showing

- Dev server auto-refreshes on save
- Hard refresh browser (Cmd+Shift+R)
- Check browser console for errors

---

## Performance

**Static-first means:**
- ⚡ Fast homepage loads
- 🔒 No database to manage
- 📦 Small output size
- 🚀 Deploy anywhere

Build times are typically **< 5 seconds** even with 100+ sparks.

---

## Support

**Questions about development?**
See [CLAUDE.md](./CLAUDE.md) - it covers everything.

**Questions about Astro?**
Visit [astro.build](https://astro.build) documentation.

**Need to track tasks?**
Use `beans` command - see CLAUDE.md for workflow.

---

## What's Next?

1. **Write a spark** about what you learned building this
2. **Read CLAUDE.md** when you want to add features
3. **Deploy** when you're ready to share
4. **Iterate** - sparks evolves as your needs change

---

**Ready? Start with:**
```bash
bun dev
# Then create src/content/sparks/my-first-spark.md
```

Happy learning! ✨
