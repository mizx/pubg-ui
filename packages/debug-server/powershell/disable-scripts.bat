@echo off
echo "Run as administrator" & echo, & echo,
powershell.exe -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy Restricted"
pause