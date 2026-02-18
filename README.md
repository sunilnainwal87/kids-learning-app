# Kids Learning App

An interactive educational web application for kids in Class 2-3 to learn Science, Math, Geography, Gymnastics, French, and English.

## Features

- 🎮 Interactive lessons and games
- 📊 Progress tracking
- 🏆 Gamification with badges and rewards
- 🎨 Kid-friendly, colorful UI
- 📱 Responsive design

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## 🚀 Quick Start - For Parents & Kids!

### First Time Setup (Do this once)

1. **Install Node.js** if you haven't already:
   - Download from: https://nodejs.org/
   - Install the LTS version (recommended)
   - Restart your computer after installation

2. **Open Terminal/Command Prompt**:
   - **Windows**: Press `Win + R`, type `cmd`, press Enter
   - **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
   - **Linux**: Press `Ctrl + Alt + T`

3. **Navigate to the project folder**:
   ```bash
   cd path/to/kids-learning-app
   ```

4. **Install the app**:
   ```bash
   npm install
   ```
   (This might take a few minutes)

### Running the App (Every time you want to use it)

#### Easy Way (Recommended):
**Windows**: Double-click `start-dev.bat`
**Mac/Linux**: Double-click `start-dev.sh` or run:
```bash
./start-dev.sh
```

#### Manual Way:
```bash
npm run dev
```

**Then:**
1. Wait for the message: `Ready in X seconds`
2. Open your browser to: **http://localhost:3000**
3. **Keep the terminal window open!** (Closing it stops the app)

### ⚠️ Can't See Your Changes?

**The #1 reason**: The development server isn't running!
- Check if you see "Ready" in the terminal
- Make sure you didn't close the terminal window

**If the server is running but changes don't appear**:

#### Quick Solutions (Try these first):
1. **Hard refresh the browser**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Use the Force Refresh button**: Look for the "🔄 Force Refresh" button in development mode
3. **Check browser console**: Press `F12` to see if there are any errors

#### Clear All Caches (Recommended):
Use our automated cache-clearing scripts:

**Windows**:
```bash
clear-cache.bat
```

**Mac/Linux**:
```bash
./clear-cache.sh
```

**Manual cleanup**:
```bash
npm run clear-all    # Clears all caches
npm run dev          # Start fresh
```

#### Other Solutions:
1. **Clear Next.js cache**: Run `npm run clean` then `npm run dev`
2. **Fresh start**: Run `npm run dev:fresh`
3. **Clear browser cache**: In your browser settings, clear cache and cookies for localhost
4. **Try incognito mode**: Open http://localhost:3000 in private/incognito window
5. **Restart the server**: Press `Ctrl+C` in terminal, then run `npm run dev` again

📖 **For detailed help**, see [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) or [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and data
- `/public` - Static assets

## Subjects

1. **Math** - Number games, basic arithmetic
2. **Science** - Fun experiments, nature exploration
3. **Geography** - World maps, countries, capitals
4. **Gymnastics** - Exercise videos, movement activities
5. **French** - Basic vocabulary, pronunciation
6. **English** - Reading, vocabulary, grammar

## Development

This is a Next.js project using the App Router. Start by exploring the subject pages and components.

## License

MIT