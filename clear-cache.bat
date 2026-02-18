@echo off
REM Script to completely clear all caches for Kids Learning App

echo.
echo ===================================================
echo  Clearing all caches for Kids Learning App
echo ===================================================
echo.

REM Check for processes on port 3000
echo Checking for processes on port 3000...
netstat -ano | findstr :3000 > nul 2>&1
if %errorlevel% equ 0 (
    echo Stopping process on port 3000...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
        taskkill /PID %%a /F > nul 2>&1
    )
    echo [OK] Port 3000 cleared
) else (
    echo [OK] Port 3000 is available
)
echo.

REM Clear Next.js build cache
echo Clearing Next.js build cache...
if exist .next (
    rmdir /s /q .next
    echo [OK] .next directory removed
) else (
    echo [OK] No .next directory found
)

REM Clear node_modules cache
echo Clearing node_modules cache...
if exist node_modules\.cache (
    rmdir /s /q node_modules\.cache
    echo [OK] node_modules\.cache removed
) else (
    echo [OK] No node_modules\.cache found
)

REM Clear ESLint cache
echo Clearing ESLint cache...
if exist .eslintcache (
    del /f /q .eslintcache
    echo [OK] .eslintcache removed
) else (
    echo [OK] No .eslintcache found
)

REM Clear any other cache directories
echo Clearing other cache directories...
if exist .cache (
    rmdir /s /q .cache
    echo [OK] .cache directory removed
) else (
    echo [OK] No .cache directory found
)

echo.
echo ===================================================
echo  All caches cleared successfully!
echo ===================================================
echo.
echo To start fresh, run:
echo    npm run dev
echo.
echo If you still see old content:
echo   1. Hard refresh: Ctrl+Shift+R
echo   2. Clear browser cache for localhost
echo   3. Try incognito mode
echo.
pause
