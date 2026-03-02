# CLAUDE.md - Sparks Microblog

This file provides guidance to Claude Code when working with the **Sparks** microblog project.

## Overview

**Sparks** is a lightweight Astro-based microblog for capturing learning moments. It uses:
- **Astro** for fast, static-first blog generation
- **Markdown** for simple, versioned post content
- **TypeScript** for type safety
- **Beans** for task/feature tracking
- **Git worktrees** for parallel feature development

---

## Quick Navigation

| Task | Jump to |
|------|---------|
| 📝 Writing a new spark | [Write a Spark](#write-a-spark) |
| 🎨 Customizing design | [Design & Styling](#design--styling) |
| ✨ Adding features | [Features & Components](#features--components) |
| 🧪 Testing locally | [Local Development](#local-development) |
| 📤 Deploying | [Deployment](#deployment) |
| 📋 Commands | [Commands Reference](#commands-reference) |

---

## Write a Spark

### Creating a New Post

Sparks are Markdown files in `src/content/sparks/`.

**Create a new spark**:
```bash
# Create a new markdown file
touch src/content/sparks/my-learning.md
```

**Spark frontmatter** (YAML header):
```markdown
---
title: "Your Learning Moment"
description: "Brief summary of the spark"
pubDate: 2026-03-02
tags: ["tag1", "tag2"]
draft: false
---

Your spark content here. Keep it concise and focused.
```

**Best practices**:
- ✅ **Short**: 100-300 words is ideal
- ✅ **Focused**: One insight per spark
- ✅ **Honest**: Real learnings, not polished essays
- ✅ **Dated**: Always include `pubDate`
- ✅ **Tagged**: Use tags to organize sparks

### Spark Structure

```
---
title: "Required: the title"
description: "Optional: 1-line summary"
pubDate: YYYY-MM-DD (required)
tags: ["optional", "list", "of", "tags"]
draft: false (optional, hide from feed if true)
---

Your markdown content here.

Supports:
- Markdown formatting
- Code blocks with syntax highlighting
- Links
- Lists
- Quotes
```

### Example Sparks

```markdown
---
title: "Learned about Astro's hydration strategies"
pubDate: 2026-03-02
tags: ["astro", "performance"]
---

Just realized Astro's `client:load` is for interactive components that need JS immediately, while `client:idle` waits for browser idle time. This is more nuanced than I thought.

For the sparks microblog, this means we can keep most UI static and only hydrate the comment section if needed.
```

---

## Local Development

### Start the dev server
```bash
bun dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your sparks.

### Rebuilding the site
```bash
bun build
# or
npm run build
```

### Preview production build
```bash
bun run preview
# or
npm run preview
```

---

## Design & Styling

### Global Styles

Edit `src/layouts/Layout.astro` for global CSS:

```astro
<style is:global>
  :root {
    --color-text: #1a1a1a;
    --color-bg: #ffffff;
    --color-accent: #ff6b35;
  }
</style>
```

### Component Styles

Create scoped styles in any `.astro` file:

```astro
<div class="spark-card">
  <!-- content -->
</div>

<style>
  .spark-card {
    border: 1px solid var(--color-border);
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>
```

### CSS Variables

- `--color-text`: Main text color
- `--color-bg`: Background color
- `--color-border`: Border color
- `--color-accent`: Accent color (links, highlights)

Automatically respects `prefers-color-scheme: dark`.

---

## Features & Components

### Project Structure

```
sparks/
├── src/
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   ├── pages/
│   │   └── index.astro          # Homepage
│   ├── content/
│   │   ├── config.ts            # Content schema
│   │   └── sparks/
│   │       └── *.md             # Individual spark posts
│   └── styles/
│       └── (component styles)
├── astro.config.mjs             # Astro configuration
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
└── CLAUDE.md                    # This file
```

### Adding Features

**When adding features**:
1. Create new page in `src/pages/`
2. Use `Layout.astro` as base
3. Keep design consistent with global styles
4. Test locally with `bun dev`

**Example: Adding an About page**:
```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="About Sparks">
  <h1>About</h1>
  <p>Your about text here.</p>
</Layout>
```

---

## Commands Reference

```bash
# Development
bun dev              # Start dev server
bun build            # Build for production
bun run preview      # Preview production build
bun run astro build  # Explicit build

# Code quality
bun lint             # Run ESLint
bun format           # Format code with Prettier
bun format:check     # Check formatting without changes

# Beans task management
beans init           # Initialize beans (already done)
beans tui            # Interactive task browser
beans create         # Create new task/feature
beans list           # List all tasks
beans view <id>      # View specific task
```

---

## Beans Task Management

Create tasks for:
- New features (e.g., "Add tags page", "Add search")
- Design improvements
- Performance optimizations
- Bug fixes

**Example task**:
```bash
beans create --type feature --title "Add archive page" --priority medium
```

Then reference the bean ID in commits:
```bash
git commit -m "[sparks-001] Add archive page for filtering posts by year"
```

---

## Git Workflow

### Create a feature branch
```bash
git checkout -b feature/add-tags-page
# or with worktree:
git worktree add -b feature/add-tags-page ./work/tags main
```

### Commit changes
```bash
git add .
git commit -m "[sparks-001] Add tags page with filtering

- Create /tags route
- Display all tags with post counts
- Filter posts by selected tag
- Add tag links to post cards"
```

### Push to remote
```bash
git push origin feature/add-tags-page
```

---

## Deployment

### Building for production
```bash
bun build
```

Output goes to `dist/` directory.

### Deploying

**Recommended platforms**:
- Vercel (auto-deploys from git)
- Netlify (auto-deploys from git)
- GitHub Pages (static hosting)

**Example Vercel deploy**:
```bash
npm install -g vercel
vercel
# Follow prompts
```

---

## Content Strategy

### Spark Types

1. **Quick Insights** (100-150 words)
   - "Just learned X"
   - "Realized Y"
   - "Discovered Z"

2. **Code Snippets** (50-100 words + code block)
   - Useful patterns
   - Solutions to problems
   - Cool techniques

3. **Reflections** (150-300 words)
   - Lessons learned
   - Project retrospectives
   - Pattern discoveries

### Organization with Tags

Use tags to categorize sparks:
- By topic: `astro`, `react`, `typescript`, `design`
- By type: `tip`, `bug-fix`, `pattern`, `gotcha`
- By project: `sparks`, `work`, `learning`

---

## Troubleshooting

### Dev server won't start
```bash
bun install
bun dev
```

### Build fails
Check for:
- Invalid frontmatter in `.md` files
- Missing `pubDate` field
- Syntax errors in Astro components

### Content not appearing
- Ensure `draft: false` in frontmatter
- Check file is in `src/content/sparks/`
- Verify frontmatter is valid YAML

---

## Architecture

### How Sparks Work

1. **Write**: Create `.md` file in `src/content/sparks/`
2. **Schema**: Frontmatter validates against `src/content/config.ts`
3. **Build**: Astro generates static HTML during build
4. **Deploy**: Push compiled HTML to hosting

### Performance

- Static-first: No JavaScript for reading posts
- Fast builds: Seconds, not minutes
- Small output: Static HTML is minimal
- Lightweight: No database needed

---

## Best Practices

### ✅ Dos

- ✅ Keep sparks short and focused
- ✅ Use consistent date format (YYYY-MM-DD)
- ✅ Tag sparks for discoverability
- ✅ Commit frequently with bean IDs
- ✅ Test locally before deploying

### ❌ Don'ts

- ❌ Don't include `draft: true` in committed posts
- ❌ Don't leave incomplete frontmatter
- ❌ Don't refactor old posts unnecessarily
- ❌ Don't add dependencies you don't use

---

## Questions & Support

**Start a session**:
- "What's the status?" → Check recent beans with `beans tui`
- "What should I work on?" → Pick unblocked high-priority bean

**Working on something**:
- "Help me design this feature" → Use plan mode
- "Review this implementation" → Ask for code review
- "Debug this issue" → Ask for investigation

---

**Last updated**: March 2, 2026
**Version**: 1.0 (Initial Astro setup)
