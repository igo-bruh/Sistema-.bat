@echo off
mode con: cols=80 lines=30 

:Vmenu
cls
echo.
echo ================================================================================
echo                          SELECIONE O TEMA VISUAL
echo ================================================================================
echo.
echo   [1] Texto Azul e Tela Preta
echo   [2] Texto Preto e Tela Azul
echo.
set /p cor=Digite sua opcao: 

if "%cor%"=="1" color 09
if "%cor%"=="2" color 10

:menu


::oi para eu te salvar:"ctrl+S" abrir terminal:"ctrl+"""
cls
echo.
echo                ===================================================
echo             =========================================================
echo          ===============================================================
echo         -------  =          Bem-vindo ao menu inicial         =   -------
echo          ===============================================================
echo             =========================================================
echo                ===================================================
echo.
echo.
echo                               Escolha uma opcao:
echo.
echo                     [1] Formatar uma unidade de disco
echo                     [2] Corrigir uma unidade de disco
echo                     [3] Mostrar as configuracoes de rede
echo                     [4] Atualizar drivers
echo                     [5] Excluir arquivos temporarios 
 
echo.
echo.
set /p op= Selecione o numero e tecle ENTER:


if "%op%"=="1" goto op1
if "%op%"=="2" goto op2
if "%op%"=="3" goto op3
if "%op%"=="4" goto op4
if "%op%"=="5" goto op5
if "%op%"=="6" goto op6
if "%op%"=="7" goto op7

:op1
start formatacao.bat

goto menu
pause

:op2
start corre.unidade.bat

goto menu
pause

:op3
start printrede.bat

goto menu
pause

:op4
start attdrivers.bat

goto menu
pause

:op5
start exctemp.bat

goto menu
pause