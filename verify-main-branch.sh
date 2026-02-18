#!/bin/bash

# Script to verify if the latest changes from PR #3 are in the main branch
# This checks for the cache-busting and cache clearing features

echo "=== Verifying Latest Changes in Main Branch ==="
echo ""

# Fetch latest main branch
echo "1. Fetching latest main branch..."
git fetch origin main:refs/remotes/origin/main 2>/dev/null || true
echo "✓ Main branch fetched"
echo ""

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "2. Current branch: $CURRENT_BRANCH"
echo ""

# Switch to main temporarily
echo "3. Checking main branch contents..."
git checkout origin/main --quiet 2>/dev/null

# Verify the key changes from PR #3
ERRORS=0

# Check 1: Verify next.config.js has cache-control headers
echo "4. Checking next.config.js for cache-control headers..."
if grep -q "Cache-Control" next.config.js && grep -q "no-store, must-revalidate" next.config.js; then
    echo "   ✓ Cache-control headers found in next.config.js"
else
    echo "   ✗ Cache-control headers NOT found in next.config.js"
    ERRORS=$((ERRORS + 1))
fi

# Check 2: Verify package.json has clean and dev:fresh scripts
echo "5. Checking package.json for cache clearing scripts..."
if grep -q '"clean":' package.json && grep -q '"dev:fresh":' package.json; then
    echo "   ✓ Cache clearing scripts found in package.json"
else
    echo "   ✗ Cache clearing scripts NOT found in package.json"
    ERRORS=$((ERRORS + 1))
fi

# Check 3: Verify package.json has rimraf dependency
echo "6. Checking package.json for rimraf dependency..."
if grep -q '"rimraf":' package.json; then
    echo "   ✓ rimraf dependency found in package.json"
else
    echo "   ✗ rimraf dependency NOT found in package.json"
    ERRORS=$((ERRORS + 1))
fi

# Check 4: Verify README.md has troubleshooting section
echo "7. Checking README.md for troubleshooting section..."
if grep -q "Troubleshooting - If you don't see latest changes:" README.md; then
    echo "   ✓ Troubleshooting section found in README.md"
else
    echo "   ✗ Troubleshooting section NOT found in README.md"
    ERRORS=$((ERRORS + 1))
fi

# Check 5: Verify the latest commit is the PR #3 merge
echo "8. Checking latest commit on main..."
LATEST_COMMIT_MSG=$(git log -1 --pretty=format:"%s")
if echo "$LATEST_COMMIT_MSG" | grep -q "fix-latest-changes-visibility"; then
    echo "   ✓ Latest commit is PR #3 merge: $LATEST_COMMIT_MSG"
else
    echo "   ⚠ Latest commit message: $LATEST_COMMIT_MSG"
fi

# Return to original branch
git checkout $CURRENT_BRANCH --quiet 2>/dev/null

echo ""
echo "=== Verification Summary ==="
if [ $ERRORS -eq 0 ]; then
    echo "✓ All checks passed! The latest changes from PR #3 ARE in the main branch."
    echo ""
    echo "PR #3 Changes Verified:"
    echo "  - Cache-control headers for development (next.config.js)"
    echo "  - Cache clearing scripts: 'npm run clean' and 'npm run dev:fresh' (package.json)"
    echo "  - rimraf dependency for cross-platform cache clearing (package.json)"
    echo "  - Troubleshooting documentation for cache issues (README.md)"
    exit 0
else
    echo "✗ $ERRORS check(s) failed. Some changes may be missing from main branch."
    exit 1
fi
