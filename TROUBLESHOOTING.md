# 🔧 Quick Troubleshooting

## ❌ Can't see changes at http://localhost:3000?

### Is the server running? ✅
- Look for "Ready in X seconds" in your terminal
- If you don't see it, run: `npm run dev`
- **Keep the terminal open!** Closing it stops the app

### Server is running but changes don't appear? 🔄

Try these in order:

#### 2. Hard Refresh (Fastest - Try this first!)
- **Windows/Linux**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

#### 3. Clear Cache and Restart (Recommended!)
```bash
# OPTION 1: Use the automated script (Linux/Mac)
./clear-cache.sh

# OPTION 2: Windows users
clear-cache.bat

# OPTION 3: Manual cleanup
npm run dev:fresh
```

#### 4. Check Your Browser
- Open DevTools: Press `F12`
- Go to Console tab
- Look for error messages

#### 5. Verify File is Saved
- Make sure you saved the file: `Ctrl + S` or `Cmd + S`
- Check for asterisk (*) in your editor's file tab

#### 6. Nuclear Option (Always works!)
```bash
# Stop server (Ctrl+C), then:
npm run clean
npm install
npm run dev
```

## 🚨 Common Errors

### "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### "Port 3000 is already in use"
**Solution**: 
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### "Cannot find module"
**Solution**: 
```bash
npm install
```

### "Failed to compile"
- **Check the terminal** for the error message
- **Read the error** - it usually tells you the problem
- **Common causes**: Syntax error, missing import, typo

## 💡 Pro Tips

1. **Always save files** before checking the browser
2. **Watch the terminal** for "Compiling..." messages
3. **Wait a moment** after saving - changes take 1-2 seconds
4. **Clear browser cache** if stuck with old version
5. **Use incognito mode** to test without cache

## 📞 Still Stuck?

1. Check [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for detailed help
2. Make sure you're editing files in `src/` folder
3. Verify you're viewing http://localhost:3000 (not file://)
4. Try a different browser
5. Restart your computer (sometimes helps!)

## ✨ For Your Daughter

Once everything works:
- She can play at http://localhost:3000
- You can edit content while she plays
- Changes appear automatically
- Just keep the terminal open in the background!

Have fun learning! 🎉
