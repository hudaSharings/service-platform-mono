# API Documentation
## Service Platform REST API

### Overview
This document outlines the complete REST API for the Service Platform application, including all endpoints, request/response formats, and authentication requirements.

### Base URL
```
Development: https://localhost:7001/api
Production: https://api.serviceplatform.com/api
```

### Authentication
All API endpoints require JWT Bearer token authentication except for public endpoints.

**Header Format:**
```
Authorization: Bearer {jwt_token}
```

### Response Format
All API responses follow a consistent format:

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "errors": null
}
```

## 1. Authentication Endpoints

### 1.1 User Registration
**POST** `/auth/register`

**Request Body:**
```json
{
  "userName": "john_doe",
  "email": "john@example.com",
  "password": "SecurePassword123!",
  "confirmPassword": "SecurePassword123!",
  "phoneNumber": "+1234567890",
  "userType": "Requester", // "Provider", "Requester", "Admin"
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-01-01",
  "gender": "Male",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "postalCode": "10001"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "550e8400-e29b-41d4-a716-446655440001",
    "email": "john@example.com",
    "userType": "Requester",
    "verificationStatus": "Pending"
  },
  "message": "User registered successfully. Please check your email for verification."
}
```

### 1.2 User Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePassword123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here",
    "expiresIn": 3600,
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "userName": "john_doe",
      "email": "john@example.com",
      "userType": "Requester",
      "verificationStatus": "Verified"
    }
  },
  "message": "Login successful"
}
```

### 1.3 Refresh Token
**POST** `/auth/refresh-token`

**Request Body:**
```json
{
  "refreshToken": "refresh_token_here"
}
```

### 1.4 Forgot Password
**POST** `/auth/forgot-password`

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

### 1.5 Reset Password
**POST** `/auth/reset-password`

**Request Body:**
```json
{
  "token": "reset_token_here",
  "newPassword": "NewSecurePassword123!",
  "confirmPassword": "NewSecurePassword123!"
}
```

### 1.6 Email Verification
**POST** `/auth/verify-email`

**Request Body:**
```json
{
  "token": "verification_token_here"
}
```

## 2. User Management Endpoints

### 2.1 Get User Profile
**GET** `/users/profile`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "userName": "john_doe",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "userType": "Requester",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-01-01",
    "gender": "Male",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "postalCode": "10001",
    "profilePictureUrl": "https://example.com/profile.jpg",
    "verificationStatus": "Verified",
    "documentsVerified": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### 2.2 Update User Profile
**PUT** `/users/profile`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "+1234567890",
  "dateOfBirth": "1990-01-01",
  "gender": "Male",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "postalCode": "10001"
}
```

### 2.3 Upload Profile Picture
**POST** `/users/profile-picture`

**Request:** Multipart form data with image file

### 2.4 Change Password
**POST** `/users/change-password`

**Request Body:**
```json
{
  "currentPassword": "CurrentPassword123!",
  "newPassword": "NewPassword123!",
  "confirmPassword": "NewPassword123!"
}
```

### 2.5 Get User Documents
**GET** `/users/documents`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440002",
      "documentType": "IDProof",
      "documentName": "Driver License",
      "documentUrl": "https://example.com/documents/license.pdf",
      "verificationStatus": "Verified",
      "verifiedAt": "2024-01-01T00:00:00Z",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 2.6 Upload Document
**POST** `/users/documents`

**Request:** Multipart form data with document file and metadata

**Request Body:**
```json
{
  "documentType": "IDProof",
  "documentName": "Driver License"
}
```

## 3. Service Categories Endpoints

### 3.1 Get All Categories
**GET** `/categories`

**Query Parameters:**
- `includeInactive` (boolean, default: false)
- `parentId` (uuid, optional)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Housekeeping",
      "description": "Home cleaning and maintenance services",
      "icon": "home",
      "isActive": true,
      "parentCategoryId": null,
      "subCategories": [
        {
          "id": "550e8400-e29b-41d4-a716-446655440006",
          "name": "Cleaning",
          "description": "General cleaning services",
          "icon": "broom",
          "isActive": true
        }
      ]
    }
  ]
}
```

### 3.2 Get Category by ID
**GET** `/categories/{id}`

### 3.3 Create Category (Admin Only)
**POST** `/categories`

**Request Body:**
```json
{
  "name": "New Category",
  "description": "Category description",
  "icon": "icon-name",
  "parentCategoryId": "550e8400-e29b-41d4-a716-446655440001"
}
```

### 3.4 Update Category (Admin Only)
**PUT** `/categories/{id}`

### 3.5 Delete Category (Admin Only)
**DELETE** `/categories/{id}`

## 4. Services Endpoints

### 4.1 Get All Services
**GET** `/services`

**Query Parameters:**
- `categoryId` (uuid, optional)
- `providerId` (uuid, optional)
- `location` (string, optional)
- `minPrice` (decimal, optional)
- `maxPrice` (decimal, optional)
- `rating` (int, optional)
- `isActive` (boolean, default: true)
- `page` (int, default: 1)
- `pageSize` (int, default: 10)
- `sortBy` (string, default: "createdAt")
- `sortOrder` (string, default: "desc")

**Response:**
```json
{
  "success": true,
  "data": {
    "services": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440003",
        "title": "Professional House Cleaning",
        "description": "Complete home cleaning service",
        "basePrice": 50.00,
        "currency": "USD",
        "pricingType": "Hourly",
        "location": "New York, NY",
        "averageRating": 4.5,
        "totalReviews": 25,
        "provider": {
          "id": "550e8400-e29b-41d4-a716-446655440004",
          "userName": "cleaner_pro",
          "firstName": "Jane",
          "lastName": "Smith",
          "profilePictureUrl": "https://example.com/profile.jpg",
          "verificationStatus": "Verified"
        },
        "category": {
          "id": "550e8400-e29b-41d4-a716-446655440001",
          "name": "Housekeeping"
        },
        "serviceImages": [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg"
        ],
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "totalCount": 100,
      "totalPages": 10
    }
  }
}
```

### 4.2 Get Service by ID
**GET** `/services/{id}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440003",
    "title": "Professional House Cleaning",
    "description": "Complete home cleaning service",
    "basePrice": 50.00,
    "currency": "USD",
    "pricingType": "Hourly",
    "location": "New York, NY",
    "isActive": true,
    "isVerified": true,
    "averageRating": 4.5,
    "totalReviews": 25,
    "serviceImages": ["https://example.com/image1.jpg"],
    "requirements": "Basic cleaning supplies provided",
    "experienceYears": 5,
    "certifications": ["Professional Cleaning Certificate"],
    "provider": {
      "id": "550e8400-e29b-41d4-a716-446655440004",
      "userName": "cleaner_pro",
      "firstName": "Jane",
      "lastName": "Smith",
      "profilePictureUrl": "https://example.com/profile.jpg",
      "verificationStatus": "Verified"
    },
    "category": {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Housekeeping"
    },
    "pricing": [
      {
        "contractType": "Hourly",
        "price": 50.00,
        "minimumHours": 1,
        "maximumHours": 8
      },
      {
        "contractType": "Weekly",
        "price": 200.00,
        "minimumHours": 4,
        "maximumHours": 20
      }
    ],
    "availability": [
      {
        "dayOfWeek": 1,
        "startTime": "09:00:00",
        "endTime": "17:00:00",
        "isAvailable": true
      }
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### 4.3 Create Service (Provider Only)
**POST** `/services`

**Request Body:**
```json
{
  "categoryId": "550e8400-e29b-41d4-a716-446655440001",
  "title": "Professional House Cleaning",
  "description": "Complete home cleaning service",
  "basePrice": 50.00,
  "currency": "USD",
  "pricingType": "Hourly",
  "location": "New York, NY",
  "requirements": "Basic cleaning supplies provided",
  "experienceYears": 5,
  "certifications": ["Professional Cleaning Certificate"],
  "pricing": [
    {
      "contractType": "Hourly",
      "price": 50.00,
      "minimumHours": 1,
      "maximumHours": 8
    }
  ],
  "availability": [
    {
      "dayOfWeek": 1,
      "startTime": "09:00:00",
      "endTime": "17:00:00"
    }
  ]
}
```

### 4.4 Update Service (Provider Only)
**PUT** `/services/{id}`

### 4.5 Delete Service (Provider Only)
**DELETE** `/services/{id}`

### 4.6 Upload Service Images
**POST** `/services/{id}/images`

**Request:** Multipart form data with image files

## 5. Contract Management Endpoints

### 5.1 Get User Contracts
**GET** `/contracts`

**Query Parameters:**
- `status` (string, optional) // Pending, Active, Completed, Cancelled, Disputed
- `contractType` (string, optional) // Hourly, Weekly, Monthly, Fixed
- `page` (int, default: 1)
- `pageSize` (int, default: 10)

**Response:**
```json
{
  "success": true,
  "data": {
    "contracts": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440005",
        "contractType": "Hourly",
        "status": "Active",
        "startDate": "2024-01-01T00:00:00Z",
        "endDate": "2024-01-31T00:00:00Z",
        "totalAmount": 500.00,
        "currency": "USD",
        "hoursPerWeek": 10,
        "totalHours": 40,
        "description": "Weekly house cleaning service",
        "service": {
          "id": "550e8400-e29b-41d4-a716-446655440003",
          "title": "Professional House Cleaning"
        },
        "provider": {
          "id": "550e8400-e29b-41d4-a716-446655440004",
          "firstName": "Jane",
          "lastName": "Smith"
        },
        "requester": {
          "id": "550e8400-e29b-41d4-a716-446655440001",
          "firstName": "John",
          "lastName": "Doe"
        },
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "totalCount": 50,
      "totalPages": 5
    }
  }
}
```

### 5.2 Get Contract by ID
**GET** `/contracts/{id}`

### 5.3 Create Contract
**POST** `/contracts`

**Request Body:**
```json
{
  "serviceId": "550e8400-e29b-41d4-a716-446655440003",
  "contractType": "Hourly",
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-01-31T00:00:00Z",
  "totalAmount": 500.00,
  "hoursPerWeek": 10,
  "totalHours": 40,
  "description": "Weekly house cleaning service",
  "terms": "Standard service terms apply"
}
```

### 5.4 Update Contract Status
**PUT** `/contracts/{id}/status`

**Request Body:**
```json
{
  "status": "Active", // Pending, Active, Completed, Cancelled, Disputed
  "cancellationReason": "Schedule conflict" // Required for cancellation
}
```

### 5.5 Get Contract Sessions
**GET** `/contracts/{id}/sessions`

### 5.6 Create Contract Session
**POST** `/contracts/{id}/sessions`

**Request Body:**
```json
{
  "sessionDate": "2024-01-15T00:00:00Z",
  "startTime": "2024-01-15T09:00:00Z",
  "endTime": "2024-01-15T13:00:00Z",
  "notes": "Regular cleaning session"
}
```

### 5.7 Update Contract Session
**PUT** `/contracts/{contractId}/sessions/{sessionId}`

## 6. Payment Endpoints

### 6.1 Get Contract Payments
**GET** `/contracts/{id}/payments`

### 6.2 Create Payment
**POST** `/contracts/{id}/payments`

**Request Body:**
```json
{
  "amount": 500.00,
  "currency": "USD",
  "paymentMethod": "Razorpay"
}
```

### 6.3 Process Razorpay Payment
**POST** `/payments/razorpay/process`

**Request Body:**
```json
{
  "paymentId": "pay_1234567890",
  "orderId": "order_1234567890",
  "signature": "razorpay_signature"
}
```

### 6.4 Get Payment History
**GET** `/payments/history`

## 7. Rating and Review Endpoints

### 7.1 Get Service Ratings
**GET** `/services/{id}/ratings`

### 7.2 Create Rating
**POST** `/contracts/{id}/ratings`

**Request Body:**
```json
{
  "rating": 5,
  "review": "Excellent service! Very professional and thorough.",
  "isAnonymous": false
}
```

### 7.3 Update Rating
**PUT** `/ratings/{id}`

### 7.4 Delete Rating
**DELETE** `/ratings/{id}`

## 8. Availability Management Endpoints

### 8.1 Get Service Availability
**GET** `/services/{id}/availability`

### 8.2 Update Service Availability
**PUT** `/services/{id}/availability`

**Request Body:**
```json
{
  "availability": [
    {
      "dayOfWeek": 1,
      "startTime": "09:00:00",
      "endTime": "17:00:00",
      "isAvailable": true
    },
    {
      "dayOfWeek": 2,
      "startTime": "09:00:00",
      "endTime": "17:00:00",
      "isAvailable": true
    }
  ]
}
```

### 8.3 Check Availability for Date Range
**POST** `/services/{id}/availability/check`

**Request Body:**
```json
{
  "startDate": "2024-01-15T00:00:00Z",
  "endDate": "2024-01-20T00:00:00Z"
}
```

## 9. Notification Endpoints

### 9.1 Get User Notifications
**GET** `/notifications`

**Query Parameters:**
- `isRead` (boolean, optional)
- `type` (string, optional)
- `page` (int, default: 1)
- `pageSize` (int, default: 10)

### 9.2 Mark Notification as Read
**PUT** `/notifications/{id}/read`

### 9.3 Mark All Notifications as Read
**PUT** `/notifications/read-all`

### 9.4 Get Notification Count
**GET** `/notifications/count`

## 10. Service Request Endpoints

### 10.1 Get Service Requests
**GET** `/service-requests`

**Query Parameters:**
- `categoryId` (uuid, optional)
- `status` (string, optional)
- `location` (string, optional)
- `page` (int, default: 1)
- `pageSize` (int, default: 10)

### 10.2 Create Service Request
**POST** `/service-requests`

**Request Body:**
```json
{
  "categoryId": "550e8400-e29b-41d4-a716-446655440001",
  "title": "Need House Cleaning Service",
  "description": "Looking for weekly house cleaning service",
  "budget": 200.00,
  "currency": "USD",
  "location": "New York, NY",
  "preferredDate": "2024-01-15T00:00:00Z"
}
```

### 10.3 Get Service Request Responses
**GET** `/service-requests/{id}/responses`

### 10.4 Respond to Service Request (Provider Only)
**POST** `/service-requests/{id}/responses`

**Request Body:**
```json
{
  "proposedPrice": 180.00,
  "currency": "USD",
  "message": "I can provide weekly cleaning service within your budget."
}
```

## 11. Admin Endpoints

### 11.1 Get All Users (Admin Only)
**GET** `/admin/users`

### 11.2 Update User Status (Admin Only)
**PUT** `/admin/users/{id}/status`

### 11.3 Get System Statistics (Admin Only)
**GET** `/admin/statistics`

### 11.4 Get System Settings (Admin Only)
**GET** `/admin/settings`

### 11.5 Update System Settings (Admin Only)
**PUT** `/admin/settings`

## Error Responses

### Standard Error Format
```json
{
  "success": false,
  "data": null,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

### Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `500` - Internal Server Error

## Rate Limiting

- **Authentication endpoints**: 5 requests per minute
- **General endpoints**: 100 requests per minute
- **File upload endpoints**: 10 requests per minute

## Pagination

All list endpoints support pagination with the following parameters:
- `page` (int, default: 1)
- `pageSize` (int, default: 10, max: 100)

Response includes pagination metadata:
```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "totalCount": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrevious": false
  }
}
``` 