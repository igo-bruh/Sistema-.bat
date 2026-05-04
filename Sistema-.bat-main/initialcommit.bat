@echo off
mode con: cols=80 lines=30 ::isso aqui era pra deixar a janela com uma definição mas deu pau

:Vmenu
cls
echo.
echo ================================================================================
echo                          SELECIONE O TEMA VISUAL
echo ================================================================================
echo.
echo   [1] Texto Azul e Tela Preta/ [10] Texto Preto e Tela Azul
echo   [2] Texto Verde e Tela Preta/ [20] Texto Preto e Tela Verde
echo   [3] Texto Azul Claro e Tela Preta/ [30] Texto Preto e Tela Azul Claro
echo   [4] Texto Vermelho e Tela Preta/ [40] Texto Preto e Tela Vermelha
echo   [5] Texto Roxo e Tela Preta/ [50] Texto Preto e Tela Roxa
echo   [6] Texto Amarelo e Tela Preta/ [60] Texto Preto e Tela Amarela
echo   [7] Texto Branco e Tela Preta/ [70] Texto Preto e Tela Branca
echo   [8] Texto Cinza e Tela Preta/ [80] Texto Preto e Tela Cinza
echo   [9] Texto AzulRush e Tela Branca/ [90] Texto Branco e Tela AzulRush
echo.
set /p cor=Digite sua opcao: 

if "%cor%"=="1" color 01
goto menu
if "%cor%"=="2" color 02
goto menu
if "%cor%"=="3" color 03
goto menu
if "%cor%"=="4" color 04
goto menu
if "%cor%"=="5" color 05
goto menu
if "%cor%"=="6" color 06
goto menu
if "%cor%"=="7" color 07
goto menu
if "%cor%"=="8" color 08
goto menu
if "%cor%"=="9" color 09
goto menu
if "%cor%"=="10" color 10
goto menu

:menu
color %cor%

::oi para eu te salvar:"ctrl+S" abrir terminal:"ctrl+"""
::git config --global --add safe.directory D:/Sistema-.bat= da permissão ao arquivo
cls
echo.
echo                ===================================================
echo             =========================================================
echo          ===============================================================
echo         -------  =            Bem-vindo ao menu inicial            =  ----------
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
echo                     [5] Documentacao readme.md
echo                     [6] Fluxograma
echo                     [7] Explicacao do codigo
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
cls
echo teste de funcionamento
pause
goto menu