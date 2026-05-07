@echo off
echo Iniciando a verificacao de atualizacoes de drivers...


:: Atualiza aplicativos e drivers conhecidos pelo sistema
winget upgrade --all --include-unknown
echo Atualizacao concluida.
echo saindo...
timeout /t 2 /nobreak >nul
exit