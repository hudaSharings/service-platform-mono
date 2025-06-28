# Database Schema Documentation
## Service Platform Database Design

### Overview
This document outlines the complete database schema for the Service Platform application, including all entities, relationships, and constraints.

### Database Technology
- **Database**: PostgreSQL 15+
- **ORM**: Entity Framework Core 8
- **Migration Tool**: EF Core Migrations

## DBML Schema Definition

```dbml
// Service Platform Database Schema

Table Users {
  Id uuid [pk]
  UserName varchar(256) [not null, unique]
  Email varchar(256) [not null, unique]
  EmailConfirmed boolean [not null, default: false]
  PhoneNumber varchar(20)
  PhoneNumberConfirmed boolean [not null, default: false]
  TwoFactorEnabled boolean [not null, default: false]
  LockoutEnd timestamp
  LockoutEnabled boolean [not null, default: false]
  AccessFailedCount int [not null, default: 0]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
  IsActive boolean [not null, default: true]
  ProfilePictureUrl varchar(500)
  DateOfBirth date
  Gender varchar(10)
  Address text
  City varchar(100)
  State varchar(100)
  Country varchar(100)
  PostalCode varchar(20)
  UserType varchar(20) [not null] // Provider, Requester, Admin
  VerificationStatus varchar(20) [not null, default: 'Pending'] // Pending, Verified, Rejected
  DocumentsVerified boolean [not null, default: false]
}

Table UserRoles {
  UserId uuid [pk, ref: > Users.Id]
  RoleId uuid [pk, ref: > Roles.Id]
}

Table Roles {
  Id uuid [pk]
  Name varchar(256) [not null, unique]
  NormalizedName varchar(256) [not null, unique]
  ConcurrencyStamp text
}

Table ServiceCategories {
  Id uuid [pk]
  Name varchar(100) [not null, unique]
  Description text
  Icon varchar(100)
  IsActive boolean [not null, default: true]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
  ParentCategoryId uuid [ref: > ServiceCategories.Id]
}

Table Services {
  Id uuid [pk]
  ProviderId uuid [not null, ref: > Users.Id]
  CategoryId uuid [not null, ref: > ServiceCategories.Id]
  Title varchar(200) [not null]
  Description text [not null]
  BasePrice decimal(10,2) [not null]
  Currency varchar(3) [not null, default: 'USD']
  PricingType varchar(20) [not null] // Hourly, Weekly, Monthly, Fixed
  Location varchar(200)
  IsActive boolean [not null, default: true]
  IsVerified boolean [not null, default: false]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
  AverageRating decimal(3,2)
  TotalReviews int [not null, default: 0]
  ServiceImages text[] // Array of image URLs
  Requirements text
  ExperienceYears int
  Certifications text[]
}

Table ServicePricing {
  Id uuid [pk]
  ServiceId uuid [not null, ref: > Services.Id]
  ContractType varchar(20) [not null] // Hourly, Weekly, Monthly, Fixed
  Price decimal(10,2) [not null]
  Currency varchar(3) [not null, default: 'USD']
  MinimumHours int
  MaximumHours int
  IsActive boolean [not null, default: true]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table Availability {
  Id uuid [pk]
  ServiceId uuid [not null, ref: > Services.Id]
  DayOfWeek int [not null] // 0=Sunday, 1=Monday, etc.
  StartTime time [not null]
  EndTime time [not null]
  IsAvailable boolean [not null, default: true]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table Contracts {
  Id uuid [pk]
  ServiceId uuid [not null, ref: > Services.Id]
  RequesterId uuid [not null, ref: > Users.Id]
  ProviderId uuid [not null, ref: > Users.Id]
  ContractType varchar(20) [not null] // Hourly, Weekly, Monthly, Fixed
  Status varchar(20) [not null, default: 'Pending'] // Pending, Active, Completed, Cancelled, Disputed
  StartDate timestamp [not null]
  EndDate timestamp
  TotalAmount decimal(10,2) [not null]
  Currency varchar(3) [not null, default: 'USD']
  HoursPerWeek int
  TotalHours int
  Description text
  Terms text
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
  CompletedAt timestamp
  CancelledAt timestamp
  CancellationReason text
  RequesterRating int
  RequesterReview text
  ProviderRating int
  ProviderReview text
}

Table ContractSessions {
  Id uuid [pk]
  ContractId uuid [not null, ref: > Contracts.Id]
  SessionDate timestamp [not null]
  StartTime timestamp [not null]
  EndTime timestamp
  HoursWorked decimal(4,2)
  Status varchar(20) [not null, default: 'Scheduled'] // Scheduled, InProgress, Completed, Cancelled
  Notes text
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table Payments {
  Id uuid [pk]
  ContractId uuid [not null, ref: > Contracts.Id]
  Amount decimal(10,2) [not null]
  Currency varchar(3) [not null, default: 'USD']
  PaymentMethod varchar(50) [not null] // Razorpay, Cash, etc.
  PaymentStatus varchar(20) [not null, default: 'Pending'] // Pending, Completed, Failed, Refunded
  RazorpayPaymentId varchar(100)
  RazorpayOrderId varchar(100)
  TransactionId varchar(100)
  PaymentDate timestamp
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
  FailureReason text
}

Table Ratings {
  Id uuid [pk]
  ContractId uuid [not null, ref: > Contracts.Id]
  RaterId uuid [not null, ref: > Users.Id]
  RatedUserId uuid [not null, ref: > Users.Id]
  Rating int [not null] // 1-5 stars
  Review text
  IsAnonymous boolean [not null, default: false]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table Notifications {
  Id uuid [pk]
  UserId uuid [not null, ref: > Users.Id]
  Title varchar(200) [not null]
  Message text [not null]
  Type varchar(50) [not null] // Contract, Payment, System, etc.
  IsRead boolean [not null, default: false]
  ReadAt timestamp
  NotificationChannel varchar(20) [not null] // InApp, Email, SMS, WhatsApp
  ExternalReferenceId varchar(100) // For external service IDs
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table UserDocuments {
  Id uuid [pk]
  UserId uuid [not null, ref: > Users.Id]
  DocumentType varchar(50) [not null] // IDProof, Certificate, License, etc.
  DocumentName varchar(200) [not null]
  DocumentUrl varchar(500) [not null]
  VerificationStatus varchar(20) [not null, default: 'Pending'] // Pending, Verified, Rejected
  VerifiedAt timestamp
  VerifiedBy uuid [ref: > Users.Id]
  RejectionReason text
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table ServiceRequests {
  Id uuid [pk]
  RequesterId uuid [not null, ref: > Users.Id]
  CategoryId uuid [not null, ref: > ServiceCategories.Id]
  Title varchar(200) [not null]
  Description text [not null]
  Budget decimal(10,2)
  Currency varchar(3) [not null, default: 'USD']
  Location varchar(200)
  PreferredDate timestamp
  Status varchar(20) [not null, default: 'Open'] // Open, InProgress, Completed, Cancelled
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table ServiceRequestResponses {
  Id uuid [pk]
  RequestId uuid [not null, ref: > ServiceRequests.Id]
  ProviderId uuid [not null, ref: > Users.Id]
  ProposedPrice decimal(10,2) [not null]
  Currency varchar(3) [not null, default: 'USD']
  Message text
  Status varchar(20) [not null, default: 'Pending'] // Pending, Accepted, Rejected
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table SystemSettings {
  Id uuid [pk]
  SettingKey varchar(100) [not null, unique]
  SettingValue text [not null]
  Description text
  IsActive boolean [not null, default: true]
  CreatedAt timestamp [not null, default: `now()`]
  UpdatedAt timestamp [not null, default: `now()`]
}

Table AuditLogs {
  Id uuid [pk]
  UserId uuid [ref: > Users.Id]
  Action varchar(100) [not null]
  EntityType varchar(100) [not null]
  EntityId varchar(100)
  OldValues text
  NewValues text
  IpAddress varchar(45)
  UserAgent text
  CreatedAt timestamp [not null, default: `now()`]
}
```

## Detailed Table Structures

### 1. Users Table
**Purpose**: Stores user account information for all platform users (providers, requesters, admins)

**Key Features**:
- UUID primary key for security
- Email and username uniqueness constraints
- User type classification (Provider, Requester, Admin)
- Profile information including address and contact details
- Verification status tracking
- Soft delete capability with IsActive flag

**Relationships**:
- One-to-Many with Services (as Provider)
- One-to-Many with Contracts (as Requester or Provider)
- One-to-Many with Notifications
- One-to-Many with UserDocuments

### 2. ServiceCategories Table
**Purpose**: Manages service categories and subcategories

**Key Features**:
- Hierarchical structure with ParentCategoryId
- Icon support for UI display
- Active/inactive status management
- Self-referencing relationship for subcategories

**Sample Categories**:
- Housekeeping (with subcategories: Cleaning, Laundry, Organizing)
- Cooking (with subcategories: Meal Prep, Catering, Cooking Classes)
- Driving (with subcategories: Personal Driver, Delivery, Transportation)

### 3. Services Table
**Purpose**: Stores service offerings by providers

**Key Features**:
- Comprehensive service details including pricing and requirements
- Rating aggregation for performance tracking
- Image array support for service galleries
- Verification status for quality control

**Relationships**:
- Many-to-One with Users (Provider)
- Many-to-One with ServiceCategories
- One-to-Many with ServicePricing
- One-to-Many with Availability
- One-to-Many with Contracts

### 4. ServicePricing Table
**Purpose**: Manages different pricing models for services

**Key Features**:
- Support for multiple contract types per service
- Flexible pricing with minimum/maximum hour constraints
- Currency support for international markets

### 5. Availability Table
**Purpose**: Tracks provider availability schedules

**Key Features**:
- Day-of-week and time slot management
- Real-time availability updates
- Conflict prevention for overlapping bookings

### 6. Contracts Table
**Purpose**: Manages service agreements between providers and requesters

**Key Features**:
- Comprehensive contract lifecycle management
- Multiple contract types support
- Rating and review storage
- Cancellation tracking with reasons

**Relationships**:
- Many-to-One with Services
- Many-to-One with Users (Requester and Provider)
- One-to-Many with ContractSessions
- One-to-Many with Payments
- One-to-Many with Ratings

### 7. ContractSessions Table
**Purpose**: Tracks individual work sessions within contracts

**Key Features**:
- Session-level time tracking
- Status management for session lifecycle
- Notes support for session details

### 8. Payments Table
**Purpose**: Manages payment transactions

**Key Features**:
- Razorpay integration support
- Multiple payment method support
- Comprehensive transaction tracking
- Failure reason logging

### 9. Ratings Table
**Purpose**: Stores user ratings and reviews

**Key Features**:
- Bidirectional rating system (requester rates provider, provider rates requester)
- Anonymous review support
- Contract-based rating association

### 10. Notifications Table
**Purpose**: Manages all platform notifications

**Key Features**:
- Multi-channel notification support (InApp, Email, SMS, WhatsApp)
- Read/unread status tracking
- External service integration support

### 11. UserDocuments Table
**Purpose**: Manages user document uploads and verification

**Key Features**:
- Multiple document type support
- Verification workflow management
- Admin approval tracking

### 12. ServiceRequests Table
**Purpose**: Manages service requests from requesters

**Key Features**:
- Request-based service matching
- Budget specification
- Location and timing preferences

### 13. ServiceRequestResponses Table
**Purpose**: Tracks provider responses to service requests

**Key Features**:
- Bidirectional matching system
- Price proposal management
- Response status tracking

### 14. SystemSettings Table
**Purpose**: Manages application configuration

**Key Features**:
- Key-value configuration storage
- Dynamic setting management
- System-wide parameter control

### 15. AuditLogs Table
**Purpose**: Tracks system activities for security and compliance

**Key Features**:
- Comprehensive activity logging
- Change tracking with old/new values
- Security audit support

## Indexes and Performance

### Primary Indexes
- All tables have UUID primary keys with clustered indexes
- Email and UserName indexes on Users table
- ServiceId and ProviderId indexes on Services table
- ContractId indexes on related tables

### Composite Indexes
```sql
-- Users table
CREATE INDEX idx_users_usertype_status ON Users(UserType, VerificationStatus);

-- Services table
CREATE INDEX idx_services_category_active ON Services(CategoryId, IsActive);
CREATE INDEX idx_services_provider_active ON Services(ProviderId, IsActive);

-- Contracts table
CREATE INDEX idx_contracts_status_dates ON Contracts(Status, StartDate, EndDate);
CREATE INDEX idx_contracts_requester_provider ON Contracts(RequesterId, ProviderId);

-- Availability table
CREATE INDEX idx_availability_service_day ON Availability(ServiceId, DayOfWeek);

-- Notifications table
CREATE INDEX idx_notifications_user_read ON Notifications(UserId, IsRead);
```

## Data Seeding

### Initial Data
```sql
-- Service Categories
INSERT INTO ServiceCategories (Id, Name, Description, Icon) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Housekeeping', 'Home cleaning and maintenance services', 'home'),
('550e8400-e29b-41d4-a716-446655440002', 'Cooking', 'Food preparation and catering services', 'utensils'),
('550e8400-e29b-41d4-a716-446655440003', 'Driving', 'Transportation and driving services', 'car'),
('550e8400-e29b-41d4-a716-446655440004', 'Tutoring', 'Educational and learning services', 'book'),
('550e8400-e29b-41d4-a716-446655440005', 'Pet Care', 'Pet sitting and grooming services', 'paw');

-- System Settings
INSERT INTO SystemSettings (Id, SettingKey, SettingValue, Description) VALUES
('550e8400-e29b-41d4-a716-446655440010', 'PlatformCommission', '10', 'Platform commission percentage'),
('550e8400-e29b-41d4-a716-446655440011', 'MaxContractDuration', '365', 'Maximum contract duration in days'),
('550e8400-e29b-41d4-a716-446655440012', 'MinServicePrice', '5.00', 'Minimum service price in USD');
```

## Migration Strategy

### Entity Framework Migrations
```bash
# Create initial migration
dotnet ef migrations add InitialCreate --project Infrastructure --startup-project Api

# Apply migrations
dotnet ef database update --project Infrastructure --startup-project Api

# Generate SQL script
dotnet ef migrations script --project Infrastructure --startup-project Api
```

### Database Backup Strategy
- Automated daily backups
- Point-in-time recovery capability
- Cross-region backup replication
- 30-day retention policy

## Security Considerations

### Data Protection
- All sensitive data encrypted at rest
- TLS 1.3 for data in transit
- PII data masking in logs
- GDPR compliance measures

### Access Control
- Row-level security for user data
- Database user role separation
- Connection string encryption
- Audit logging for all data access 