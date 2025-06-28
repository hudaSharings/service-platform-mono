# Test Credentials for Service Platform

## 🚀 Quick Start
1. Run the UI in standalone mode: `npm run dev:standalone`
2. Open http://localhost:3000
3. Use any of the credentials below to login

## 👥 Test Accounts

### 🔧 Admin Account
- **Email**: `admin@serviceplatform.com`
- **Password**: `password`
- **Access**: Full admin panel with all features

### 👨‍💼 Provider Account
- **Email**: `john.doe@example.com`
- **Password**: `password`
- **Access**: Service provider dashboard
- **Services**: Housekeeping, Cooking, Gardening

### 👩‍💼 Requester Account
- **Email**: `jane.smith@example.com`
- **Password**: `password`
- **Access**: User dashboard for booking services

### 🚗 Unverified Provider
- **Email**: `mike.wilson@example.com`
- **Password**: `password`
- **Access**: Provider account (needs verification)
- **Services**: Driving service (pending verification)

## 📱 What You Can Test

### Admin Panel (`/admin/dashboard`)
- View platform statistics
- Manage users and services
- Approve pending verifications
- Monitor contracts and revenue

### User Dashboard (`/dashboard`)
- View personal statistics
- Manage profile and settings
- Track recent activity

### Services Page (`/services`)
- Browse all available services
- Search and filter by category
- View service details and ratings
- Filter by location and price

### Admin Management Pages
- **Users** (`/admin/users`): Manage user accounts
- **Services** (`/admin/services`): Approve and manage services
- **Categories** (`/admin/categories`): Manage service categories
- **Contracts** (`/admin/contracts`): Monitor contracts and payments

## 🎯 Mock Data Available

### Services
- Professional House Cleaning ($25/hr)
- Private Chef Services ($50/hr)
- Professional Driving Service ($35/hr)
- Garden Maintenance ($30/hr)

### Categories
- Housekeeping
- Cooking
- Driving
- Gardening
- Pet Care
- Tutoring

### Contracts
- Active weekly cleaning contract
- Pending chef service booking
- Completed driving service

## 🔧 Troubleshooting

### Login Issues
- Make sure you're using the exact email/password combination
- Check that the UI is running in standalone mode
- Clear browser cache if needed

### Page Not Loading
- Ensure the development server is running
- Check browser console for errors
- Verify the URL is correct

### Mock Data Not Showing
- Confirm `NEXT_PUBLIC_USE_MOCK_API=true` is set
- Restart the development server
- Check the yellow banner at the top indicating mock mode

## 🎨 Features to Test

### Authentication
- ✅ Login with different user types
- ✅ Automatic redirect based on user role
- ✅ Form validation and error handling

### Service Browsing
- ✅ Search functionality
- ✅ Category filtering
- ✅ Location and price filtering
- ✅ Service cards with provider info

### Admin Features
- ✅ Dashboard statistics
- ✅ User management
- ✅ Service verification
- ✅ Category management

### Responsive Design
- ✅ Mobile-friendly interface
- ✅ Tablet and desktop layouts
- ✅ Touch-friendly interactions 