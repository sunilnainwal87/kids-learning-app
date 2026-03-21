@echo off
setlocal enabledelayedexpansion

:: Set colors (limited in cmd)
echo.
echo ========================================================
echo          Kids Learning App - Dev Server
echo ========================================================
echo.

:: Check Node.js
echo Checking Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION% found

:: Check npm
echo Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] npm v%NPM_VERSION% found

:: Check node_modules
echo Checking dependencies...
if not exist "node_modules" (
    echo [WARNING] Dependencies not found. Installing...
    echo This may take a few minutes...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
    echo [OK] Dependencies installed successfully
) else (
    echo [OK] Dependencies found
)

:: Check if port 3000 is in use
echo Checking port 3000...
netstat -ano | findstr ":3000" | findstr "LISTENING" >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [WARNING] Port 3000 is already in use!
    echo.
    echo The server might already be running, or another app is using this port.
    set /p KILL_PORT="Do you want to stop the existing process? (Y/N): "
    if /i "!KILL_PORT!"=="Y" (
        for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
            echo Stopping process %%a...
            taskkill /F /PID %%a >nul 2>nul
        )
        echo [OK] Port 3000 is now available
    ) else (
        echo Exiting... Please stop the other process manually
        pause
        exit /b 1
    )
) else (
    echo [OK] Port 3000 is available
)

echo.
echo ========================================================
echo All checks passed!
echo ========================================================
echo.

:: Launch a background helper that waits for the server then opens the browser
start /b powershell -NoProfile -Command "while(!(Test-NetConnection -ComputerName localhost -Port 3000 -InformationLevel Quiet -ErrorAction SilentlyContinue)){Start-Sleep -Seconds 2}; Write-Host '[OK] Server is ready! Opening browser...'; Start-Process 'http://localhost:3000'"

echo.
echo ========================================================
echo   Starting server - your browser will open automatically
echo   Keep this window OPEN while using the app
echo   To stop: Press Ctrl+C
echo ========================================================
echo.

:: Start the dev server in the foreground (keeps this window alive)
call npm run dev
