---
title: Weekly Optimization Review
type: task
status: todo
priority: low
recurring: true
schedule: "Every Sunday"
blockedBy: []
---

## Weekly Optimization Review

Review project health, performance, and process improvements.

## Description

Every Sunday (or when needed), run a quick optimization review:

1. Check site build time
2. Review content organization
3. Document pain points
4. Decide: optimize now or later?
5. Update OPTIMIZATIONS.md with findings

## How to Do This

See: `docs/learnings/WEEKLY_REVIEW_TEMPLATE.md`

Time: 10-15 minutes

```bash
# Ask Claude Code:
"Run weekly optimization check"

# Or follow template manually:
# 1. Copy WEEKLY_REVIEW_TEMPLATE.md
# 2. Fill in metrics and observations
# 3. Save as docs/learnings/weekly-review-[DATE].md
# 4. Commit with [weekly] prefix
```

## Acceptance Criteria

✓ Build time recorded and analyzed
✓ Content organization reviewed
✓ Pain points documented (if any)
✓ Next improvement identified
✓ Review file saved to docs/learnings/
✓ OPTIMIZATIONS.md updated if needed

## Notes

- This is a **recurring task** - never close permanently
- Takes 10-15 minutes per week
- Early warning system for issues
- Feeds into feature planning
- See OPTIMIZATIONS.md for what to check

## Tags

`maintenance` `weekly` `optimization`
