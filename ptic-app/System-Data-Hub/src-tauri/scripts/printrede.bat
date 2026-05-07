@echo off
title Escreve config de rede

ipconfig


echo Deseja uma visao mais detalhada? (S/N)
set /p opcao=""

if "%opcao%"=="s" goto :sim
if "%opcao%"=="S" goto :sim
if "%opcao%"=="n" goto :nao
if "%opcao%"=="N" goto :nao

:: Se digitar outra coisa, volta ao menu
goto menu

:sim
cls
ipconfig /all

pause
exit

:nao
echo Saindo...
timeout /t 2 /nobreak >nul
exit
