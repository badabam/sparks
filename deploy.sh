#!/bin/bash
set -e

echo "🚀 Deploying Sparks to GitHub Pages..."

# Build the site
echo "📦 Building site..."
npm run build

# Create gh-pages branch if it doesn't exist
if ! git rev-parse --verify gh-pages >/dev/null 2>&1; then
  echo "📝 Creating gh-pages branch..."
  git checkout --orphan gh-pages
  git rm -rf .
  git commit --allow-empty -m "Initial gh-pages branch"
  git checkout main
fi

# Push dist folder to gh-pages
echo "📤 Pushing to gh-pages branch..."
git subtree push --prefix dist origin gh-pages

echo "✅ Deployed! Your site is live at:"
echo "   https://badabam.github.io/sparks/"
echo ""
echo "📋 Next: Go to Settings > Pages and confirm source is 'gh-pages' branch"
