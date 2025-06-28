# PowerShell script to run Service Platform UI in standalone mode
Write-Host "Starting Service Platform UI in Standalone Mode..." -ForegroundColor Green
Write-Host ""
Write-Host "This will run the frontend with mock data - no backend required!" -ForegroundColor Yellow
Write-Host ""
Write-Host "Test Accounts:" -ForegroundColor Cyan
Write-Host "- Admin: admin@serviceplatform.com / password" -ForegroundColor White
Write-Host "- Provider: john.doe@example.com / password" -ForegroundColor White
Write-Host "- Requester: jane.smith@example.com / password" -ForegroundColor White
Write-Host ""
Write-Host "Opening http://localhost:3000 in your browser..." -ForegroundColor Green
Write-Host ""

# Set environment variable for mock API
$env:NEXT_PUBLIC_USE_MOCK_API = "true"

# Start the development server
npm run dev 