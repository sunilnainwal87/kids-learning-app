#!/bin/bash
# Script to completely clear all caches and restart fresh

echo "🧹 Clearing all caches for Kids Learning App..."
echo ""

# Stop any running processes on port 3000
echo "⚠️  Checking for processes on port 3000..."
if lsof -ti:3000 > /dev/null 2>&1; then
  echo "Stopping process on port 3000..."
  lsof -ti:3000 | xargs kill -9 2>/dev/null || true
  echo "✓ Port 3000 cleared"
else
  echo "✓ Port 3000 is available"
fi
echo ""

# Clear Next.js build cache
echo "📦 Clearing Next.js build cache..."
rm -rf .next
echo "✓ .next directory removed"

# Clear node_modules cache
echo "📦 Clearing node_modules cache..."
rm -rf node_modules/.cache
echo "✓ node_modules/.cache removed"

# Clear ESLint cache
echo "📦 Clearing ESLint cache..."
rm -f .eslintcache
echo "✓ .eslintcache removed"

# Clear any other cache directories
echo "📦 Clearing other cache directories..."
rm -rf .cache
echo "✓ All cache directories cleared"

echo ""
echo "✅ All caches cleared successfully!"
echo ""
echo "🚀 To start fresh, run:"
echo "   npm run dev"
echo ""
echo "💡 If you still see old content:"
echo "   1. Hard refresh your browser: Ctrl+Shift+R (Win/Linux) or Cmd+Shift+R (Mac)"
echo "   2. Clear browser cache and cookies for localhost"
echo "   3. Try incognito/private browsing mode"
echo ""
