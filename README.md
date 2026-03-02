# Sparks ✨

A lightweight microblog for capturing learning moments. Built with Astro.

## What's a Spark?

A spark is a brief moment of insight or discovery about something you've learned. Think of it as:
- Quick aha moments
- Interesting patterns you noticed
- Small lessons learned through exploration
- Useful techniques you want to remember

Sparks are intentionally short and focused—100-300 words is ideal.

## Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Open http://localhost:3000
```

## Creating Sparks

Add a new Markdown file to `src/content/sparks/`:

```markdown
---
title: "Your Learning Moment"
pubDate: 2026-03-02
tags: ["tag1", "tag2"]
---

Your spark content here. Keep it concise and focused.
```

See [CLAUDE.md](./CLAUDE.md) for complete workflow guide.

## Project Structure

```
sparks/
├── src/
│   ├── content/sparks/        # Markdown posts
│   ├── layouts/               # Base layout
│   ├── pages/                 # Static pages
│   └── styles/                # Component styles
├── docs/                       # Documentation
│   ├── brainstorms/           # Feature exploration
│   ├── plans/                 # Implementation plans
│   └── learnings/             # Patterns and retrospectives
├── .beans/                    # Task tracking
├── CLAUDE.md                  # Development guide
└── astro.config.mjs           # Astro configuration
```

## Commands

```bash
bun dev              # Start dev server
bun build            # Build for production
bun run preview      # Preview production build
bun lint             # Run ESLint
bun format           # Format code with Prettier
```

## Deployment

Built output goes to `dist/`. Deploy to:
- **Vercel** (recommended, zero-config)
- **Netlify** (zero-config)
- **GitHub Pages** (static hosting)

## Workflow

See [CLAUDE.md](./CLAUDE.md) for:
- How to write sparks
- Design and styling guide
- Git workflow with beans tasks
- Feature development process

## Optimizations

See [OPTIMIZATIONS.md](./OPTIMIZATIONS.md) for tracking improvements and performance metrics.

---

**Built with**: Astro 5, TypeScript, Markdown
**Deployed to**: (Add your deployment URL here)
