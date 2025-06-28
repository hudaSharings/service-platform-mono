@echo off
echo Starting Service Platform UI in Standalone Mode...
echo.
echo This will run the frontend with mock data - no backend required!
echo.
echo Test Accounts:
echo - Admin: admin@serviceplatform.com / password
echo - Provider: john.doe@example.com / password  
echo - Requester: jane.smith@example.com / password
echo.
echo Opening http://localhost:3000 in your browser...
echo.
set NEXT_PUBLIC_USE_MOCK_API=true
npm run dev 