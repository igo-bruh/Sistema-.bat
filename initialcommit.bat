@echo off
:menu
echo =========================
echo Bem vindo ao menu inicial
echo =========================
echo.
echo Escolha uma opção Para executar
echo.
echo 1 - Formatar uma unidade de disco
echo.
echo 2 - corrigir uma unidade de disco
echo.
echo 3 - mmostrar as configurações de rede
echo.
echo 4 - atualizar drivers
echo.
echo 5 - Documentação readme.md
echo.
echo 6 - fluxograma
echo.
echo 7 - explicação do código
echo.
echo.
pause
echo escolha apenas as opções acima
set /p op=aqui


if "%op%"=="1" goto op1
if "%op%"=="2" goto op2
if "%op%"=="3" goto op3
if "%op%"=="4" goto op4
if "%op%"=="5" goto op5
if "%op%"=="6" goto op6
if "%op%"=="7" goto op7

:op1
cls
echo teste de funcionamento
pause
