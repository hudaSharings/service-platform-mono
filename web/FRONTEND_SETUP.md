# Frontend Setup Guide

## Overview

The frontend is built with Next.js 15, TypeScript, TailwindCSS, and Shadcn UI components. It provides a modern, responsive interface for the Service Platform.

## Features Implemented

### Authentication Pages
- **Login Page** (`/auth/login`) - User authentication with email/password
- **Registration Page** (`/auth/register`) - User registration with comprehensive form
- **Forgot Password Page** (`/auth/forgot-password`) - Password reset functionality

### Public Pages
- **Homepage** (`/`) - Landing page with features and call-to-action
- **Services Page** (`/services`) - Browse and search services with filters

### User Dashboard
- **Dashboard** (`/dashboard`) - User overview with stats and quick actions
- **Profile Management** - User profile and settings (to be implemented)

### Admin Panel
- **Admin Dashboard** (`/admin/dashboard`) - Overview with platform statistics
- **User Management** (`/admin/users`) - Manage users, verification, and status
- **Service Management** (`/admin/services`) - Manage services and verifications
- **Category Management** (`/admin/categories`) - CRUD operations for service categories
- **Contract Management** (`/admin/contracts`) - Monitor contracts and payments

## Components Used

### Shadcn UI Components
- Button, Card, Input, Label, Form
- Select, Textarea, Badge, Avatar
- Table, Tabs, Dialog, Alert Dialog
- Dropdown Menu, Alert, Sonner (toast)

### Custom Components
- `AdminNavbar` - Admin panel navigation with sidebar
- Form validation with React Hook Form and Zod
- Responsive design with TailwindCSS

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the web directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_APP_NAME=Service Platform
   NEXT_PUBLIC_APP_VERSION=1.0.0
   NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true
   NEXT_PUBLIC_ENABLE_PAYMENTS=true
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Key Features

### Authentication Flow
- JWT token-based authentication
- Automatic redirect based on user type (Admin/User)
- Form validation with error handling
- Password visibility toggle
- Responsive design for mobile and desktop

### Service Browsing
- Advanced search and filtering
- Category-based filtering
- Price range filtering
- Location-based search
- Service cards with provider information
- Rating and review display

### Admin Panel
- Comprehensive dashboard with statistics
- User management with status updates
- Service verification and approval
- Category management with CRUD operations
- Contract monitoring and management
- Responsive sidebar navigation

### User Dashboard
- Personalized overview with statistics
- Recent activity tracking
- Quick action buttons
- Profile completion status
- Contract and service management

## File Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── forgot-password/page.tsx
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── users/page.tsx
│   │   ├── services/page.tsx
│   │   ├── categories/page.tsx
│   │   └── contracts/page.tsx
│   ├── dashboard/page.tsx
│   ├── services/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (Shadcn UI components)
│   ├── admin/
│   │   └── AdminNavbar.tsx
│   ├── auth/
│   └── services/
└── lib/
    └── utils.ts
```

## API Integration

The frontend integrates with the .NET Web API backend through:
- RESTful API calls using fetch
- JWT token authentication
- Error handling and loading states
- Form validation and submission

## Styling

- **TailwindCSS** for utility-first styling
- **Shadcn UI** for consistent component design
- **Responsive design** for mobile and desktop
- **Dark mode support** (can be extended)
- **Custom color scheme** with blue primary color

## Next Steps

1. **Implement remaining features:**
   - User profile management
   - Service creation for providers
   - Contract booking flow
   - Payment integration
   - Real-time notifications

2. **Enhance existing features:**
   - Add more admin analytics
   - Implement advanced search
   - Add service reviews and ratings
   - Create mobile app version

3. **Performance optimizations:**
   - Image optimization
   - Code splitting
   - Caching strategies
   - SEO optimization

## Troubleshooting

### Common Issues
1. **API Connection Errors** - Check if backend is running and API URL is correct
2. **Authentication Issues** - Clear localStorage and re-login
3. **Styling Issues** - Ensure TailwindCSS is properly configured
4. **Build Errors** - Check TypeScript types and dependencies

### Development Tips
- Use React DevTools for debugging
- Check browser console for API errors
- Use TailwindCSS IntelliSense for styling
- Test responsive design on different screen sizes 