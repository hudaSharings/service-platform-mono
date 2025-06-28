# Service Platform - Full Stack Application

A comprehensive service platform connecting service providers and requesters for various services including housekeeping, cooking, driving, and more.

## Project Structure

```
AI-Source/
├── api/                    # Backend .NET 8 Web API (Clean Architecture)
│   ├── Domain/            # Domain entities and business logic
│   ├── Application/       # Application services and DTOs
│   ├── Infrastructure/    # Data access and external services
│   └── Api/              # Web API controllers and configuration
├── web/                   # Frontend Next.js 15 application
│   ├── components/        # Reusable UI components
│   ├── pages/            # Next.js pages
│   ├── hooks/            # Custom React hooks
│   └── styles/           # TailwindCSS styles
├── docs/                  # Documentation
│   ├── BRD.md            # Business Requirements Document
│   ├── API.md            # API Documentation
│   └── DATABASE.md       # Database Schema Documentation
└── README.md             # This file
```

## Quick Start

### Backend Setup
```bash
cd api
dotnet restore
dotnet run --project Api
```

### Frontend Setup
```bash
cd web
npm install
npm run dev
```

## Features

- **User Management**: Provider and Requester roles with authentication
- **Service Categories**: Housekeeping, Cooking, Driving, and more
- **Contract Management**: Hourly, Weekly, Monthly, and Fixed-Price contracts
- **Availability Scheduling**: Real-time availability management
- **Rating System**: Reviews and ratings for services
- **Payment Integration**: Razorpay payment gateway
- **Notifications**: SMS, WhatsApp, and in-app notifications
- **Admin Panel**: Comprehensive admin dashboard

## Tech Stack

### Backend
- .NET 8 Web API
- Entity Framework Core
- PostgreSQL
- Clean Architecture
- Identity Manager API

### Frontend
- Next.js 15
- TypeScript
- TailwindCSS
- Shadcn UI Components
- React Hook Form

## Documentation

- [Business Requirements Document](docs/BRD.md)
- [API Documentation](docs/API.md)
- [Database Schema](docs/DATABASE.md) 