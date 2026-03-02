# GitHub Pages Setup (Final Step)

Your Sparks blog is ready to deploy! Just one final step needed.

## Enable GitHub Pages

1. Go to: https://github.com/badabam/sparks/settings/pages
2. Under **"Source"**, select **"GitHub Actions"**
3. Click **Save**
4. Wait 1-2 minutes for the first deployment

That's it! Your site will be live at: **https://badabam.github.io/sparks/**

## What This Does

Once enabled, every time you:
- Push to the `main` branch
- Create a new spark in `src/content/sparks/`
- Update your site content

GitHub Actions will:
1. Build your site automatically
2. Deploy it to GitHub Pages
3. Your changes go live in seconds

## Verify It's Working

After enabling Pages, you should see:
- Green checkmark on commits (workflow passed)
- Your site live at https://badabam.github.io/sparks/
- GitHub Pages shown as "Active" in settings

## Troubleshooting

**If deployment still fails**:
1. Check [Actions tab](https://github.com/badabam/sparks/actions) for error details
2. Verify Pages is enabled in settings
3. Make sure source is set to "GitHub Actions"

**If site doesn't appear**:
- Sometimes takes 2-3 minutes for first deployment
- Try a hard refresh (Cmd+Shift+R)
- Check that Pages shows "✅ Your site is live at..."

## Next Steps

Once it's live:
1. Write your first spark in `src/content/sparks/my-first-spark.md`
2. Push to GitHub
3. Watch it appear on your live site within seconds!

---

**Current status**: Workflow configured ✅ | Pages enabled: ⏳ (needs manual step)

**Ready?** → https://github.com/badabam/sparks/settings/pages
