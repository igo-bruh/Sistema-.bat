@echo off
echo Limpando arquivos temporarios...
timeout /t 2 /nobreak > nul

:: Limpa a pasta Temp do usuario (%temp%)
del /q /f /s "%temp%\*"
for /d %%x in ("%temp%\*") do rmdir /s /q "%%x"

:: Limpa a pasta Temp do Windows (C:\Windows\Temp)
del /q /f /s "C:\Windows\Temp\*"
for /d %%x in ("C:\Windows\Temp\*") do rmdir /s /q "%%x"
echo.
echo Limpeza concluida!
pause