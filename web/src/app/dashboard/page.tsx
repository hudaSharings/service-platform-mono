"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Briefcase, 
  FileText, 
  Star, 
  DollarSign,
  Clock,
  MapPin,
  Plus,
  Search,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  Users,
  CalendarDays,
  Settings
} from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Skeleton, SkeletonCard, SkeletonText, SkeletonAvatar } from "@/components/ui/skeleton";
import { PageTransition } from "@/components/ui/page-transition";

interface ServiceRequest {
  id: string;
  serviceId: string;
  serviceTitle: string;
  requesterId: string;
  requesterName: string;
  requesterAvatar?: string;
  providerId: string;
  providerName: string;
  providerAvatar?: string;
  requestType: 'Hourly' | 'Weekly' | 'Monthly' | 'FixedPrice';
  startDate: string;
  endDate?: string;
  totalAmount: number;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'InProgress' | 'Completed' | 'Cancelled';
  description: string;
  specialRequirements?: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

interface Availability {
  id: string;
  userId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

interface DashboardData {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
    profilePictureUrl?: string;
    bio?: string;
    rating?: number;
    reviewCount?: number;
    totalEarnings?: number;
    totalServices?: number;
  };
  stats: {
    totalServices: number;
    totalContracts: number;
    totalEarnings: number;
    averageRating: number;
    activeContracts: number;
    pendingRequests: number;
    completedServices: number;
    upcomingServices: number;
    totalHours: number;
    monthlyEarnings: number;
  };
  pendingRequests?: ServiceRequest[];
  upcomingServices?: ServiceRequest[];
  completedServices?: ServiceRequest[];
  activeServices?: ServiceRequest[];
  pastServices?: ServiceRequest[];
  availability?: Availability[];
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push('/auth/login');
        return;
      }
      fetchDashboard();
    }
  }, [isAuthenticated, authLoading, user]);

  const fetchDashboard = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      let result;
      if (user.userType === "Provider") {
        result = await api.getProviderDashboard(user.id);
      } else {
        result = await api.getRequesterDashboard(user.id);
      }
      
      setDashboard(result);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
      case "Accepted":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "Completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "InProgress":
        return <Badge className="bg-purple-100 text-purple-800">In Progress</Badge>;
      case "Rejected":
      case "Cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Show loading while auth is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading..." />
      </div>
    );
  }

  // Show loading while fetching dashboard data
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {/* Skeleton Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <SkeletonAvatar />
              <div className="flex-1">
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </div>

          {/* Skeleton Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mb-1" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skeleton Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PageTransition>
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
              <p className="text-gray-600 mb-8">Get started by exploring our services or creating your profile.</p>
              <div className="flex gap-4 justify-center">
                <Link href="/services">
                  <Button>Browse Services</Button>
                </Link>
                <Link href="/profile">
                  <Button variant="outline">Complete Profile</Button>
                </Link>
              </div>
            </div>
          </div>
        </PageTransition>
      </div>
    );
  }

  const isProvider = dashboard.user.userType === "Provider";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageTransition>
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={dashboard.user.profilePictureUrl} />
                <AvatarFallback>
                  {dashboard.user.firstName[0]}{dashboard.user.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {dashboard.user.firstName}!
                </h1>
                <p className="text-gray-600">
                  {dashboard.user.userType} • {dashboard.user.email}
                </p>
                {dashboard.user.bio && (
                  <p className="text-sm text-gray-500 mt-1">{dashboard.user.bio}</p>
                )}
              </div>
              <div className="flex gap-2">
                <Link href="/profile">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                {isProvider && (
                  <Link href="/availability">
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Availability
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {isProvider ? "Total Services" : "Total Requests"}
                </CardTitle>
                <Briefcase className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboard.stats.totalServices}</div>
                <p className="text-xs text-muted-foreground">
                  {isProvider ? "Services provided" : "Requests made"}
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
                <FileText className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboard.stats.totalContracts}</div>
                <p className="text-xs text-muted-foreground">Completed contracts</p>
              </CardContent>
            </Card>

            {isProvider && (
              <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboard.stats.totalEarnings}</div>
                  <p className="text-xs text-muted-foreground">Your total earnings</p>
                </CardContent>
              </Card>
            )}

            <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {isProvider ? "Average Rating" : "Active Services"}
                </CardTitle>
                <Star className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isProvider 
                    ? `${dashboard.stats.averageRating.toFixed(1)}/5.0`
                    : dashboard.stats.activeContracts
                  }
                </div>
                <p className="text-xs text-muted-foreground">
                  {isProvider ? "Your service rating" : "Currently active"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Stats for Providers */}
          {isProvider && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboard.stats.pendingRequests}</div>
                  <p className="text-xs text-muted-foreground">Awaiting your response</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Services</CardTitle>
                  <CalendarDays className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboard.stats.upcomingServices}</div>
                  <p className="text-xs text-muted-foreground">Scheduled services</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboard.stats.monthlyEarnings}</div>
                  <p className="text-xs text-muted-foreground">This month's earnings</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Quick Actions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services">
                  <Button className="w-full flex items-center gap-2 transition-all duration-200 hover:scale-105">
                    <Search className="h-4 w-4" />
                    Browse Services
                  </Button>
                </Link>
                {isProvider && (
                  <Link href="/services/create">
                    <Button className="w-full flex items-center gap-2 transition-all duration-200 hover:scale-105">
                      <Plus className="h-4 w-4" />
                      Create Service
                    </Button>
                  </Link>
                )}
                <Link href="/profile">
                  <Button className="w-full flex items-center gap-2 transition-all duration-200 hover:scale-105" variant="outline">
                    <User className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {isProvider ? (
                <>
                  <TabsTrigger value="pending">Pending Requests</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming Services</TabsTrigger>
                  <TabsTrigger value="completed">Completed Services</TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger value="active">Active Services</TabsTrigger>
                  <TabsTrigger value="past">Past Services</TabsTrigger>
                  <TabsTrigger value="pending">Pending Requests</TabsTrigger>
                </>
              )}
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Active Contracts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Active {isProvider ? "Services" : "Requests"} ({dashboard.stats.activeContracts})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      You have {dashboard.stats.activeContracts} active {isProvider ? "services" : "requests"}.
                    </p>
                    <Link href={`/dashboard?tab=${isProvider ? "upcoming" : "active"}`}>
                      <Button variant="outline" size="sm">
                        View All {isProvider ? "Services" : "Requests"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Profile Completion */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profile Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Profile Picture</span>
                        <Badge className="bg-green-100 text-green-800">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Contact Information</span>
                        <Badge className="bg-green-100 text-green-800">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Verification</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                      </div>
                      {isProvider && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Availability</span>
                          <Badge className="bg-green-100 text-green-800">Set</Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Availability for Providers */}
              {isProvider && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Your Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-2">
                      {dayNames.map((day, index) => {
                        const dayAvailability = dashboard.availability?.find(a => a.dayOfWeek === index);
                        return (
                          <div key={day} className="text-center">
                            <div className="text-xs font-medium text-gray-600 mb-1">{day.slice(0, 3)}</div>
                            {dayAvailability ? (
                              <div className={`text-xs p-1 rounded ${
                                dayAvailability.isAvailable 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {dayAvailability.isAvailable 
                                  ? `${formatTime(dayAvailability.startTime)}-${formatTime(dayAvailability.endTime)}`
                                  : 'Unavailable'
                                }
                              </div>
                            ) : (
                              <div className="text-xs p-1 rounded bg-gray-100 text-gray-600">
                                Not Set
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Provider-specific tabs */}
            {isProvider && (
              <>
                <TabsContent value="pending" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Service Requests</CardTitle>
                      <CardDescription>New requests awaiting your response</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {dashboard.pendingRequests && dashboard.pendingRequests.length > 0 ? (
                        <div className="space-y-4">
                          {dashboard.pendingRequests.map((request) => (
                            <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4 flex-1">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={request.requesterAvatar} />
                                  <AvatarFallback>
                                    {request.requesterName.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="font-medium">{request.serviceTitle}</p>
                                  <p className="text-sm text-gray-600">Requested by {request.requesterName}</p>
                                  <p className="text-xs text-gray-500">
                                    {formatDate(request.startDate)} • {request.location}
                                  </p>
                                  <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="text-right">
                                  <p className="font-medium">${request.totalAmount}</p>
                                  <p className="text-xs text-gray-500">{request.requestType}</p>
                                </div>
                                <div className="flex gap-2">
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Accept
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Decline
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No pending requests.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="upcoming" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Services</CardTitle>
                      <CardDescription>Your confirmed and in-progress services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {dashboard.upcomingServices && dashboard.upcomingServices.length > 0 ? (
                        <div className="space-y-4">
                          {dashboard.upcomingServices.map((service) => (
                            <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4 flex-1">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={service.requesterAvatar} />
                                  <AvatarFallback>
                                    {service.requesterName.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="font-medium">{service.serviceTitle}</p>
                                  <p className="text-sm text-gray-600">For {service.requesterName}</p>
                                  <p className="text-xs text-gray-500">
                                    {formatDate(service.startDate)} • {service.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="text-right">
                                  <p className="font-medium">${service.totalAmount}</p>
                                  <p className="text-xs text-gray-500">{service.requestType}</p>
                                </div>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No upcoming services.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Completed Services</CardTitle>
                      <CardDescription>Your finished services and earnings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {dashboard.completedServices && dashboard.completedServices.length > 0 ? (
                        <div className="space-y-4">
                          {dashboard.completedServices.map((service) => (
                            <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4 flex-1">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={service.requesterAvatar} />
                                  <AvatarFallback>
                                    {service.requesterName.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="font-medium">{service.serviceTitle}</p>
                                  <p className="text-sm text-gray-600">For {service.requesterName}</p>
                                  <p className="text-xs text-gray-500">
                                    Completed {formatDate(service.updatedAt)} • {service.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="text-right">
                                  <p className="font-medium">${service.totalAmount}</p>
                                  <p className="text-xs text-gray-500">{service.requestType}</p>
                                </div>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No completed services yet.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}

            {/* Requester-specific tabs */}
            {!isProvider && (
              <>
                <TabsContent value="active" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Services</CardTitle>
                      <CardDescription>Your ongoing service requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {dashboard.activeServices && dashboard.activeServices.length > 0 ? (
                        <div className="space-y-4">
                          {dashboard.activeServices.map((service) => (
                            <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4 flex-1">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={service.providerAvatar} />
                                  <AvatarFallback>
                                    {service.providerName.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="font-medium">{service.serviceTitle}</p>
                                  <p className="text-sm text-gray-600">Provided by {service.providerName}</p>
                                  <p className="text-xs text-gray-500">
                                    {formatDate(service.startDate)} • {service.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="text-right">
                                  <p className="font-medium">${service.totalAmount}</p>
                                  <p className="text-xs text-gray-500">{service.requestType}</p>
                                </div>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No active services.</p>
                          <Link href="/services">
                            <Button className="mt-4">Browse Services</Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="past" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Past Services</CardTitle>
                      <CardDescription>Your completed service requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {dashboard.pastServices && dashboard.pastServices.length > 0 ? (
                        <div className="space-y-4">
                          {dashboard.pastServices.map((service) => (
                            <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4 flex-1">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={service.providerAvatar} />
                                  <AvatarFallback>
                                    {service.providerName.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="font-medium">{service.serviceTitle}</p>
                                  <p className="text-sm text-gray-600">Provided by {service.providerName}</p>
                                  <p className="text-xs text-gray-500">
                                    Completed {formatDate(service.updatedAt)} • {service.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="text-right">
                                  <p className="font-medium">${service.totalAmount}</p>
                                  <p className="text-xs text-gray-500">{service.requestType}</p>
                                </div>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No past services.</p>
                          <Link href="/services">
                            <Button className="mt-4">Browse Services</Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pending" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Requests</CardTitle>
                      <CardDescription>Your service requests awaiting provider response</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {dashboard.pendingRequests && dashboard.pendingRequests.length > 0 ? (
                        <div className="space-y-4">
                          {dashboard.pendingRequests.map((request) => (
                            <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4 flex-1">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={request.providerAvatar} />
                                  <AvatarFallback>
                                    {request.providerName.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="font-medium">{request.serviceTitle}</p>
                                  <p className="text-sm text-gray-600">Requested from {request.providerName}</p>
                                  <p className="text-xs text-gray-500">
                                    {formatDate(request.startDate)} • {request.location}
                                  </p>
                                  <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="text-right">
                                  <p className="font-medium">${request.totalAmount}</p>
                                  <p className="text-xs text-gray-500">{request.requestType}</p>
                                </div>
                                {getStatusBadge(request.status)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No pending requests.</p>
                          <Link href="/services">
                            <Button className="mt-4">Browse Services</Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </PageTransition>
    </div>
  );
} 