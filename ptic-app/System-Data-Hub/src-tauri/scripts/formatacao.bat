@echo off
:: titulo da janela :v
title Formatador de Unidade

:: pede a letra da unidade que é desejada a formatação
set /p drive="Digite a letra da unidade que deseja formatar (ex: D, E, F): "

echo.
echo =================================================================
echo ATENCAO: Voce esta prestes a formatar a unidade %drive%:
echo Todos os dados serao perdidos!
echo =================================================================
echo.

:: Pede confirmação para ter crtz né
pause

:: Executa a formatação
:: /FS:NTFS define o sistema de arquivos (pode mudar para FAT32 se preferir)
:: /Q executa a formatacao rapida
:: /V:Backup define o nome (label) do disco após formatar
format %drive%: /FS:NTFS /Q /V:NovaUnidade

:: mensagem do final
echo.
echo Formatacao concluida com sucesso!
pause
exit