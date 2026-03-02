# Optimizations & Tracking

Track performance improvements, feature requests, and process enhancements for the Sparks microblog.

## Quick Wins (Do These First)

- [ ] Add tags page for filtering sparks by topic
- [ ] Create RSS feed for subscribers
- [ ] Add dark mode toggle (CSS already supports it)
- [ ] Implement search/filtering on homepage
- [ ] Add "Recent" and "Popular" views

**Effort**: 1-2 hours each
**Impact**: High - directly improves UX

---

## Medium Improvements

### Content Organization

- [ ] Archive page (view by year/month)
- [ ] Related sparks suggestions
- [ ] Spark categories (tips, reflections, code, etc.)
- [ ] Reading time estimates

**Effort**: 2-4 hours
**Impact**: Medium - helps discoverability

### Design & UX

- [ ] Improve typography (heading hierarchy)
- [ ] Add breadcrumb navigation
- [ ] Implement syntax highlighting themes
- [ ] Mobile-optimized navigation

**Effort**: 2-3 hours
**Impact**: Medium - improves usability

### Features

- [ ] Newsletter signup
- [ ] Comments section (using Utterances or Giscus)
- [ ] Social sharing buttons
- [ ] View counter on sparks

**Effort**: 1-3 hours each
**Impact**: Varies

---

## Future Enhancements

### Advanced Features

- [ ] Full-text search with indexing
- [ ] Tag recommendations
- [ ] Spark recommendations engine
- [ ] Statistics dashboard (most-viewed, trending tags)
- [ ] Export posts to other platforms
- [ ] Writing streaks/activity tracker

**Effort**: 4-8 hours each
**Impact**: Nice to have

### Performance

- [ ] Image optimization (lazy loading)
- [ ] Minify CSS/JS further
- [ ] Service worker for offline reading
- [ ] Incremental static regeneration

**Effort**: 2-6 hours
**Impact**: Marginal on static site

### Integrations

- [ ] Twitter/X cross-posting
- [ ] Mastodon integration
- [ ] Email-to-blog publishing
- [ ] Mobile app companion
- [ ] API for external tools

**Effort**: 4-12 hours each
**Impact**: Depends on use case

---

## Weekly Review Checklist

Every Sunday, check:

- [ ] Build time (target: < 5 seconds)
- [ ] Number of published sparks (growing?)
- [ ] Most recent spark date (keep content fresh)
- [ ] Outstanding beans tasks (any blockers?)
- [ ] Pain points this week (what was hard?)
- [ ] Ideas for next feature (brainstorm)

**See**: `docs/learnings/WEEKLY_REVIEW_TEMPLATE.md` for template

---

## Metrics to Track

### Build Performance

| Metric | Target | Current |
|--------|--------|---------|
| Build time | < 5s | - |
| Output size | < 500KB | - |
| Page load | < 2s | - |

### Content

| Metric | Target | Current |
|--------|--------|---------|
| Published sparks | Grow weekly | 1 |
| Avg spark length | 100-300 words | - |
| Tags per spark | 2-4 | - |

### Development

| Metric | Target | Current |
|--------|--------|---------|
| Beans tasks completed | 1-2 per week | - |
| Time on tasks | 1-2 hours | - |
| Code quality | ESLint clean | - |

---

## Triggers for Optimization

**When to implement improvements**:

- **Build time > 10s** → Profile and optimize
- **Hard to find old sparks** → Add search/archive
- **Multiple feature requests** → Brainstorm and prioritize
- **Weekly review shows pain point** → Create beans task
- **Performance complaints** → Measure and optimize
- **Content organization getting messy** → Add categories/tags

---

## Decision Framework

When deciding what to build next, ask:

1. **Does it directly solve a problem?** → Do it
2. **Is it requested multiple times?** → Prioritize it
3. **Will it improve discoverability?** → Probably yes
4. **Is it a "nice to have"?** → Save for later
5. **Does it require new dependencies?** → Question it
6. **Can it be built in 2-3 hours?** → Maybe
7. **Can it be built in < 1 hour?** → Definitely do it

---

## Process Notes

### Keeping the Blog Fresh

- Publish 1-2 sparks per week
- Review and update old sparks monthly
- Archive off-topic or resolved sparks
- Update tags as your taxonomy evolves

### Managing Technical Debt

- Refactor as you add features (not separately)
- Keep dependencies minimal
- Review and remove unused code
- Update TypeScript annually

### Feature Development

1. Create beans task
2. Write in `docs/brainstorms/` if complex
3. Plan in `docs/plans/` if multi-file
4. Implement in feature branch
5. Test locally
6. Commit with beans ID
7. Deploy

---

## Q&A

**When should I add a feature?**
When it solves a real problem or makes publishing easier.

**What if something is broken?**
Create a "fix/" beans task immediately, no planning needed.

**How do I decide between two features?**
Pick the one that:
1. Takes less time
2. Solves a bigger problem
3. Unblocks more work

**What if I run out of ideas?**
Review your weekly notes. Inspiration comes from patterns.

---

## Last Review

- **Date**: 2026-03-02 (Initial setup)
- **Build time**: N/A (setup phase)
- **Next review**: 2026-03-09

---

See [CLAUDE.md](./CLAUDE.md) for the complete development workflow.
