@echo off
title Correcao de unidade
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit cd /d "%~dp0" 

set /p unidade="que unidade vc gostaria de corrigir? (ex: C:, D:, E: etc..): "

echo.
echo iniciando processo na unidade %unidade% em
echo 3
timeout /t 2 /nobreak >nul
echo 2
timeout /t 1 /nobreak >nul
echo 1
timeout /t 1 /nobreak >nul
:: /f fixes errors, /r locates bad sectors
chkdsk %unidade% /f /r

echo.
echo Correcao completa!
pause