cd /d %~dp0
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -File remove-host.ps1 "prod-live-front.playbattlegrounds.com"
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -File remove-host.ps1 "prod-live-entry.playbattlegrounds.com"
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -File remove-host.ps1 "test-live-front.playbattlegrounds.com"

pause