This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Service Platform Frontend

A modern Next.js 15 frontend for the Service Platform, built with TypeScript, TailwindCSS, and Shadcn UI components.

## Features

- **Authentication**: Login, registration, and password reset
- **Service Browsing**: Search and filter services by category, location, and price
- **Admin Panel**: Complete admin dashboard with user, service, and contract management
- **User Dashboard**: Personalized user overview and management
- **Responsive Design**: Mobile-first responsive design
- **Mock API Mode**: Run standalone without backend

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run in standalone mode (recommended for development):**
   ```bash
   npm run dev:standalone
   ```
   
   This runs the UI with mock data - no backend required!

3. **Or run with backend API:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Mock Data

The application includes comprehensive mock data for standalone development:

### Test Accounts
- **Admin**: `admin@serviceplatform.com` / `password`
- **Provider**: `john.doe@example.com` / `password`
- **Requester**: `jane.smith@example.com` / `password`

### Mock Data Includes
- Users (Admin, Providers, Requesters)
- Service Categories (Housekeeping, Cooking, Driving, etc.)
- Services with ratings and reviews
- Contracts and payments
- Notifications
- Dashboard statistics

## Environment Variables

Create a `.env.local` file for custom configuration:

```env
# Enable mock API for standalone development
NEXT_PUBLIC_USE_MOCK_API=true

# Backend API URL (not used when mock API is enabled)
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# App Configuration
NEXT_PUBLIC_APP_NAME=Service Platform
NEXT_PUBLIC_APP_VERSION=1.0.0
```

## Available Scripts

- `npm run dev` - Start development server with backend API
- `npm run dev:standalone` - Start development server with mock data
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── auth/              # Authentication pages
│   ├── admin/             # Admin panel pages
│   ├── dashboard/         # User dashboard
│   └── services/          # Service browsing
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── admin/            # Admin-specific components
└── lib/                  # Utilities and services
    ├── api.ts            # Unified API service
    ├── mockApi.ts        # Mock API implementation
    └── mocks.ts          # Mock data
```

## Key Features

### Authentication Flow
- JWT token-based authentication
- Automatic redirect based on user type
- Form validation with error handling
- Password visibility toggle

### Service Browsing
- Advanced search and filtering
- Category-based filtering
- Price range filtering
- Location-based search
- Service cards with provider information

### Admin Panel
- Comprehensive dashboard with statistics
- User management with status updates
- Service verification and approval
- Category management with CRUD operations
- Contract monitoring and management

### User Dashboard
- Personalized overview with statistics
- Recent activity tracking
- Quick action buttons
- Profile completion status

## Development

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Using Mock Data
The mock API automatically provides realistic data with simulated delays. To add new mock data:

1. Add data to `src/lib/mocks.ts`
2. Add corresponding API methods to `src/lib/mockApi.ts`
3. Update the unified API in `src/lib/api.ts`

### Styling
- **TailwindCSS** for utility-first styling
- **Shadcn UI** for consistent component design
- **Responsive design** for mobile and desktop

## Troubleshooting

### Common Issues
1. **Port already in use** - Change port: `npm run dev -- -p 3001`
2. **Mock data not loading** - Check `NEXT_PUBLIC_USE_MOCK_API=true`
3. **Styling issues** - Ensure TailwindCSS is properly configured

### Development Tips
- Use React DevTools for debugging
- Check browser console for API errors
- Use TailwindCSS IntelliSense for styling
- Test responsive design on different screen sizes

## Next Steps

1. **Connect to real backend** - Set `NEXT_PUBLIC_USE_MOCK_API=false`
2. **Add more features** - Implement remaining functionality
3. **Deploy** - Build and deploy to your hosting platform

## License

This project is part of the Service Platform application.
