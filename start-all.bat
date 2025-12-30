@echo off
echo ========================================
echo    RoLexAI - PORNIRE COMPLETA
echo ========================================
echo.

:: Porneste backend
echo [1/2] Pornesc Backend...
start "RoLexAI Backend" cmd /k "cd /d %~dp0backend && echo === BACKEND PORT 5001 === && node index.js"
timeout /t 2 /nobreak > nul

:: Porneste web server
echo [2/2] Pornesc Web Server...
start "RoLexAI Web" cmd /k "cd /d %~dp0demo && echo === WEB SERVER PORT 3000 === && node server.js"
timeout /t 3 /nobreak > nul

echo.
echo ========================================
echo   SERVERE PORNITE!
echo ========================================
echo.
echo Pe PC: http://localhost:3000
echo.
echo Pe TELEFON:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        echo    http://%%b:3000
    )
)
echo.
echo IMPORTANT: Telefonul trebuie pe ACEEASI WiFi!
echo ========================================
pause
