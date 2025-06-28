# Service Platform API

A comprehensive .NET 9 Web API for the Service Platform, built with Clean Architecture principles.

## 🏗️ Architecture

The API follows Clean Architecture with the following layers:

- **Domain**: Core entities and business logic
- **Application**: Use cases, DTOs, and interfaces
- **Infrastructure**: Data access, external services, and implementations
- **API**: Controllers, middleware, and configuration

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **User Management**: Registration, login, profile management
- **Service Management**: CRUD operations for services with categories
- **Contract Management**: Service contracts with status tracking
- **Admin Panel**: Comprehensive admin dashboard and management tools
- **Swagger Documentation**: Complete API documentation
- **Entity Framework Core**: Code-first database approach
- **AutoMapper**: Object-to-object mapping
- **Repository Pattern**: Generic repository implementation

## 📋 Prerequisites

- .NET 9 SDK
- SQL Server (LocalDB, Express, or Full)
- Visual Studio 2022 or VS Code

## 🛠️ Setup Instructions

### 1. Database Setup

1. Ensure SQL Server is running
2. Update the connection string in `appsettings.json` if needed:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=ServicePlatform;Trusted_Connection=true;TrustServerCertificate=true;MultipleActiveResultSets=true"
   }
   ```

### 2. Build and Run

```bash
# Navigate to the API directory
cd api

# Restore packages
dotnet restore

# Build the solution
dotnet build

# Run the API
dotnet run --project ServicePlatform.Api
```

The API will be available at:
- **API**: https://localhost:7001
- **Swagger UI**: https://localhost:7001 (root)

### 3. Database Migration

The API uses `EnsureCreated()` for simplicity. For production, use migrations:

```bash
# Add migration
dotnet ef migrations add InitialCreate --project ServicePlatform.Infrastructure --startup-project ServicePlatform.Api

# Update database
dotnet ef database update --project ServicePlatform.Infrastructure --startup-project ServicePlatform.Api
```

## 🔐 Authentication

### Default Admin User

The API automatically creates a default admin user:
- **Username**: admin
- **Email**: admin@serviceplatform.com
- **Password**: Admin123!
- **Role**: Admin

### JWT Configuration

JWT settings are configured in `appsettings.json`:

```json
"Jwt": {
  "Secret": "your-super-secret-key-with-at-least-32-characters-for-jwt-signing",
  "Issuer": "ServicePlatform",
  "Audience": "ServicePlatform",
  "ExpiryInDays": 7
}
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/forgot-password` - Forgot password request
- `POST /api/auth/reset-password` - Reset password
- `POST /api/auth/change-password` - Change password (authenticated)
- `GET /api/auth/profile` - Get user profile (authenticated)
- `PUT /api/auth/profile` - Update user profile (authenticated)

### Services
- `GET /api/services` - Get all services with filtering
- `GET /api/services/{id}` - Get service by ID
- `POST /api/services` - Create new service (Provider role)
- `PUT /api/services/{id}` - Update service (Provider role)
- `DELETE /api/services/{id}` - Delete service (Provider role)
- `GET /api/services/provider/{providerId}` - Get services by provider
- `GET /api/services/category/{categoryId}` - Get services by category
- `PUT /api/services/{id}/status` - Update service status (Admin role)
- `PUT /api/services/{id}/verification` - Update service verification (Admin role)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get category by ID
- `POST /api/categories` - Create new category (Admin role)
- `PUT /api/categories/{id}` - Update category (Admin role)
- `DELETE /api/categories/{id}` - Delete category (Admin role)
- `PUT /api/categories/{id}/status` - Update category status (Admin role)

### Admin
- `GET /api/admin/statistics` - Get dashboard statistics (Admin role)
- `GET /api/admin/users` - Get all users with filtering (Admin role)
- `PUT /api/admin/users/{userId}/status` - Update user status (Admin role)
- `PUT /api/admin/users/{userId}/verification` - Update user verification (Admin role)
- `GET /api/admin/services` - Get admin services view (Admin role)
- `GET /api/admin/categories` - Get admin categories view (Admin role)
- `GET /api/admin/contracts` - Get admin contracts view (Admin role)

## 🔧 Configuration

### Environment Variables

For production, set these environment variables:

```bash
# Database
ConnectionStrings__DefaultConnection=your-production-connection-string

# JWT
Jwt__Secret=your-production-jwt-secret
Jwt__Issuer=ServicePlatform
Jwt__Audience=ServicePlatform

# Logging
Logging__LogLevel__Default=Information
```

### CORS

CORS is configured to allow all origins in development. For production, update the CORS policy in `Program.cs`.

## 📊 Database Schema

The API includes the following entities:

- **Users**: User accounts with roles (Admin, Provider, Requester)
- **ServiceCategories**: Service categories (Housekeeping, Cooking, Driving, etc.)
- **Services**: Service offerings by providers
- **Contracts**: Service contracts between providers and requesters
- **Payments**: Payment records
- **Ratings**: Service ratings and reviews
- **Notifications**: System notifications
- **AuditLogs**: System audit trail

## 🧪 Testing

### Using Swagger UI

1. Navigate to https://localhost:7001
2. Use the interactive Swagger UI to test endpoints
3. Authenticate using the login endpoint to get a JWT token
4. Use the "Authorize" button to include the token in requests

### Using Postman

1. Import the API endpoints
2. Set the base URL to https://localhost:7001
3. Use the login endpoint to get a JWT token
4. Include the token in the Authorization header: `Bearer {token}`

## 🚀 Deployment

### Docker

```bash
# Build the Docker image
docker build -t serviceplatform-api .

# Run the container
docker run -p 7001:7001 serviceplatform-api
```

### Azure App Service

1. Create an Azure App Service
2. Configure the connection string in Application Settings
3. Deploy using Azure CLI or Visual Studio

## 🔍 Troubleshooting

### Common Issues

1. **Database Connection**: Ensure SQL Server is running and the connection string is correct
2. **JWT Token**: Check that the JWT secret is at least 32 characters long
3. **CORS**: If calling from a frontend, ensure CORS is properly configured
4. **Port Conflicts**: Change the port in `launchSettings.json` if needed

### Logs

Check the console output for detailed error messages and logs.

## 📝 Contributing

1. Follow the Clean Architecture principles
2. Add proper XML documentation to new endpoints
3. Include unit tests for new functionality
4. Update the Swagger documentation

## 📄 License

This project is licensed under the MIT License. 