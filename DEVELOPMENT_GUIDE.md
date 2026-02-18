# 🚀 Development Guide - Kids Learning App

## 📋 Quick Start Checklist

If you can't see your changes in the browser at http://localhost:3000/, follow these steps:

### Step 1: Is the Development Server Running? ✅

**You MUST have the development server running to see the app!**

1. Open a terminal/command prompt
2. Navigate to the project folder:
   ```bash
   cd kids-learning-app
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Wait for the message: "Ready in X seconds" or "Local: http://localhost:3000"
5. Open your browser to http://localhost:3000

**Keep this terminal window open!** If you close it, the server stops and the website won't work.

### Step 2: Still Not Seeing Changes? 🔄

If the server is running but changes don't appear:

#### Option A: Hard Refresh Your Browser (Fastest)
- **Windows/Linux**: Press `Ctrl + Shift + R`
- **Mac**: Press `Cmd + Shift + R`
- **Alternative**: Press `Ctrl/Cmd + F5`

#### Option B: Clear Next.js Cache
```bash
# Stop the server first (Ctrl+C in the terminal)
npm run clean
npm run dev
```

#### Option C: Fresh Start (Most Thorough)
```bash
# Stop the server first (Ctrl+C in the terminal)
npm run dev:fresh
```

#### Option D: Clear Browser Cache
1. Open browser settings
2. Find "Clear browsing data" or "Clear cache"
3. Select "Cached images and files"
4. Click "Clear data"
5. Refresh the page

### Step 3: Common Issues 🔧

#### "npm: command not found"
- You need to install Node.js first
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Restart your terminal after installation

#### "Cannot find module" or "Module not found"
```bash
# Install dependencies first
npm install
# Then start the server
npm run dev
```

#### Port 3000 is already in use
```bash
# Option 1: Use a different port
PORT=3001 npm run dev

# Option 2: Stop the other process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

## 🎯 How to Make Changes

1. **Start the dev server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Make your code changes** in any file under `src/`

3. **Save the file** (Ctrl+S or Cmd+S)

4. **Check your browser** - changes should appear automatically within 1-2 seconds!
   - If not, hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

5. **Check the terminal** for any error messages

## 📁 File Structure

```
kids-learning-app/
├── src/
│   ├── app/           ← Main pages (page.tsx, layout.tsx)
│   ├── components/    ← Reusable UI components
│   ├── lib/           ← Data and utilities
│   └── types/         ← TypeScript type definitions
├── public/            ← Images, icons, static files
├── package.json       ← Project dependencies
└── next.config.js     ← Next.js configuration
```

## 🛠️ Available Commands

| Command | What it does |
|---------|--------------|
| `npm install` | Install all dependencies (run this first!) |
| `npm run dev` | Start development server with hot reload |
| `npm run dev:fresh` | Clear cache and start fresh dev server |
| `npm run clean` | Clear Next.js cache |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Check code for issues |

## 🔥 Hot Module Replacement (HMR)

This app has Hot Module Replacement enabled. This means:
- ✅ Changes to React components update instantly
- ✅ Changes to CSS/Tailwind update instantly
- ✅ Your browser state is preserved (no full page reload)
- ⚠️ Some changes (like next.config.js) require a server restart

## 💡 Pro Tips

1. **Keep the terminal visible** - Error messages appear here!
2. **Save your files** - Changes only appear after saving (Ctrl+S)
3. **Watch for "Compiling /"** messages in terminal - this means changes are being processed
4. **Use your browser's DevTools** (F12) to see console errors
5. **If stuck, restart everything**:
   - Close browser
   - Stop server (Ctrl+C)
   - Run `npm run dev:fresh`
   - Open browser to http://localhost:3000

## ❓ Getting Help

If you're still having issues:
1. Check the terminal for error messages
2. Check the browser console (F12 → Console tab)
3. Read the error messages carefully - they often explain the problem
4. Try the "Fresh Start" option above
5. Make sure all files are saved

## 🎮 For Your Daughter

Once you have it running:
1. The dev server stays on at http://localhost:3000
2. She can play and learn while it's running
3. You can make changes to add more content
4. Changes appear automatically (no need to restart)
5. Keep the terminal window open in the background

Have fun! 🎉
