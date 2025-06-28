# Service Platform - Start Applications Script
# This script starts both the API and Web applications

Write-Host "Starting Service Platform Applications..." -ForegroundColor Green

# Function to check if a port is in use
function Test-Port {
    param([int]$Port)
    try {
        $connection = New-Object System.Net.Sockets.TcpClient
        $connection.Connect("localhost", $Port)
        $connection.Close()
        return $true
    }
    catch {
        return $false
    }
}

# Start API in background
Write-Host "Starting API on http://localhost:5111..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd api; dotnet run --project ServicePlatform.Api" -WindowStyle Minimized

# Wait for API to start
Write-Host "Waiting for API to start..." -ForegroundColor Yellow
$maxAttempts = 30
$attempt = 0
while ($attempt -lt $maxAttempts) {
    if (Test-Port 5111) {
        Write-Host "API is running on http://localhost:5111" -ForegroundColor Green
        break
    }
    Start-Sleep -Seconds 2
    $attempt++
    Write-Host "Attempt $attempt/$maxAttempts - Waiting for API..." -ForegroundColor Gray
}

if ($attempt -eq $maxAttempts) {
    Write-Host "Warning: API may not be fully started yet" -ForegroundColor Yellow
}

# Start Web application
Write-Host "Starting Web application on http://localhost:3000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd web; npm run dev" -WindowStyle Minimized

# Wait for Web to start
Write-Host "Waiting for Web application to start..." -ForegroundColor Yellow
$attempt = 0
while ($attempt -lt $maxAttempts) {
    if (Test-Port 3000) {
        Write-Host "Web application is running on http://localhost:3000" -ForegroundColor Green
        break
    }
    Start-Sleep -Seconds 2
    $attempt++
    Write-Host "Attempt $attempt/$maxAttempts - Waiting for Web app..." -ForegroundColor Gray
}

if ($attempt -eq $maxAttempts) {
    Write-Host "Warning: Web application may not be fully started yet" -ForegroundColor Yellow
}

Write-Host "`nService Platform is starting up!" -ForegroundColor Green
Write-Host "API: http://localhost:5111" -ForegroundColor Cyan
Write-Host "Web: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Swagger: http://localhost:5111" -ForegroundColor Cyan
Write-Host "`nPress any key to exit this script (applications will continue running)..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 