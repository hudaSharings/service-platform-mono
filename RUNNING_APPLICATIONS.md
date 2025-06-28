# Running Service Platform Applications

This guide explains how to run the Service Platform with real API integration instead of mock data.

## Prerequisites

- .NET 8 SDK
- Node.js 18+ and npm
- PostgreSQL database (or SQL Server for development)

## Quick Start

### Option 1: Using the PowerShell Script (Recommended)

1. Run the PowerShell script to start both applications:
   ```powershell
   .\start-applications.ps1
   ```

This will automatically:
- Start the API on http://localhost:5111
- Start the Web application on http://localhost:3000
- Wait for both applications to be ready

### Option 2: Manual Start

#### 1. Start the API

```bash
cd api
dotnet run --project ServicePlatform.Api
```

The API will be available at:
- **API**: http://localhost:5111
- **Swagger UI**: http://localhost:5111

#### 2. Start the Web Application

In a new terminal:

```bash
cd web
npm run dev
```

The web application will be available at:
- **Web App**: http://localhost:3000

## Configuration

### Environment Variables

The web application uses the following environment variables (configured in `web/.env.local`):

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5111/api
NEXT_PUBLIC_USE_MOCK_API=false

# Application Configuration
NEXT_PUBLIC_APP_NAME=Service Platform
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Database Configuration

The API uses the connection string from `api/ServicePlatform.Api/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ServicePlatform;Trusted_Connection=true;TrustServerCertificate=true;"
  }
}
```

## Default Admin User

When the API starts for the first time, it automatically creates a default admin user:

- **Email**: admin@serviceplatform.com
- **Password**: Admin123!
- **Role**: Admin

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create new service
- `GET /api/services/{id}` - Get service by ID

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category

### Admin
- `GET /api/admin/users` - Get all users (Admin only)
- `GET /api/admin/statistics` - Get dashboard statistics (Admin only)

## Troubleshooting

### API Not Starting
1. Check if port 5111 is available
2. Ensure database connection is correct
3. Check if all dependencies are installed

### Web App Not Connecting to API
1. Verify API is running on http://localhost:5111
2. Check `.env.local` configuration
3. Ensure `NEXT_PUBLIC_USE_MOCK_API=false`

### Database Issues
1. Ensure database server is running
2. Check connection string in `appsettings.json`
3. Run database migrations if needed:
   ```bash
   cd api
   dotnet ef database update --project ServicePlatform.Infrastructure --startup-project ServicePlatform.Api
   ```

## Development Mode

### Using Mock Data
To switch back to mock data for development:

1. Update `web/.env.local`:
   ```env
   NEXT_PUBLIC_USE_MOCK_API=true
   ```

2. Restart the web application

### API Development
- Swagger UI is available at http://localhost:5111
- Use the interactive API documentation to test endpoints
- JWT tokens are automatically included in requests

## Production Deployment

For production deployment:

1. Update environment variables for production URLs
2. Configure proper database connection strings
3. Set up HTTPS certificates
4. Configure CORS policies appropriately

## Support

If you encounter issues:
1. Check the console logs for both applications
2. Verify all prerequisites are installed
3. Ensure ports are not blocked by firewall
4. Check database connectivity 