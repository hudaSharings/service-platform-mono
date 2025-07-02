"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Briefcase, 
  FileText, 
  Star, 
  DollarSign,
  Clock,
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
import Navbar from "@/components/Navbar";
import { toast } from "react-hot-toast";

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
}

export default function TestMockPage() {
  const [providerDashboard, setProviderDashboard] = useState<DashboardData | null>(null);
  const [requesterDashboard, setRequesterDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const loadDashboards = async () => {
    setLoading(true);
    try {
      // Load provider dashboard (John Doe - ID: 2)
      const providerResult = await api.getProviderDashboard("2");
      if (providerResult.success) {
        setProviderDashboard(providerResult.data || {});
      } else {
        toast.error(providerResult.message || "Failed to load provider dashboard");
      }

      // Load requester dashboard (Jane Smith - ID: 3)
      const requesterResult = await api.getRequesterDashboard("3");
      if (requesterResult.success) {
        setRequesterDashboard(requesterResult.data || {});
      } else {
        toast.error(requesterResult.message || "Failed to load requester dashboard");
      }
    } catch (error) {
      console.error("Error loading dashboards:", error);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard Comparison Test</h1>
          <p className="text-gray-600 mb-6">
            This page demonstrates the different dashboard views for Service Providers and Service Requesters.
          </p>
          <div className="flex gap-4">
            <Button onClick={loadDashboards} disabled={loading}>
              {loading ? "Loading..." : "Load Dashboard Data"}
            </Button>
            <Link href="/dashboard">
              <Button variant="outline">Go to Your Dashboard</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Provider Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Provider Dashboard
              </CardTitle>
              <CardDescription>
                John Doe (Service Provider) - View for service providers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {providerDashboard ? (
                <div className="space-y-6">
                  {/* User Info */}
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={providerDashboard.user.profilePictureUrl} />
                      <AvatarFallback>
                        {providerDashboard.user.firstName[0]}{providerDashboard.user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{providerDashboard.user.firstName} {providerDashboard.user.lastName}</h3>
                      <p className="text-sm text-gray-600">{providerDashboard.user.userType}</p>
                      <p className="text-sm text-gray-500">{providerDashboard.user.email}</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-blue-600">{providerDashboard.stats.totalServices}</div>
                      <div className="text-sm text-gray-600">Total Services</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-green-600">${providerDashboard.stats.totalEarnings}</div>
                      <div className="text-sm text-gray-600">Total Earnings</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-yellow-600">{providerDashboard.stats.pendingRequests}</div>
                      <div className="text-sm text-gray-600">Pending Requests</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-purple-600">{providerDashboard.stats.averageRating.toFixed(1)}/5.0</div>
                      <div className="text-sm text-gray-600">Average Rating</div>
                    </div>
                  </div>

                  {/* Pending Requests */}
                  {providerDashboard.pendingRequests && providerDashboard.pendingRequests.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Pending Requests ({providerDashboard.pendingRequests.length})</h4>
                      <div className="space-y-2">
                        {providerDashboard.pendingRequests.slice(0, 2).map((request) => (
                          <div key={request.id} className="p-3 bg-white rounded-lg border">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{request.serviceTitle}</p>
                                <p className="text-xs text-gray-600">Requested by {request.requesterName}</p>
                                <p className="text-xs text-gray-500">{formatDate(request.startDate)}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-sm">${request.totalAmount}</p>
                                {getStatusBadge(request.status)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Upcoming Services */}
                  {providerDashboard.upcomingServices && providerDashboard.upcomingServices.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Upcoming Services ({providerDashboard.upcomingServices.length})</h4>
                      <div className="space-y-2">
                        {providerDashboard.upcomingServices.slice(0, 2).map((service) => (
                          <div key={service.id} className="p-3 bg-white rounded-lg border">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{service.serviceTitle}</p>
                                <p className="text-xs text-gray-600">For {service.requesterName}</p>
                                <p className="text-xs text-gray-500">{formatDate(service.startDate)}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-sm">${service.totalAmount}</p>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">Click "Load Dashboard Data" to see provider dashboard</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Requester Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-green-600" />
                Requester Dashboard
              </CardTitle>
              <CardDescription>
                Jane Smith (Service Requester) - View for service requesters
              </CardDescription>
            </CardHeader>
            <CardContent>
              {requesterDashboard ? (
                <div className="space-y-6">
                  {/* User Info */}
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={requesterDashboard.user.profilePictureUrl} />
                      <AvatarFallback>
                        {requesterDashboard.user.firstName[0]}{requesterDashboard.user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{requesterDashboard.user.firstName} {requesterDashboard.user.lastName}</h3>
                      <p className="text-sm text-gray-600">{requesterDashboard.user.userType}</p>
                      <p className="text-sm text-gray-500">{requesterDashboard.user.email}</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-green-600">{requesterDashboard.stats.totalServices}</div>
                      <div className="text-sm text-gray-600">Total Requests</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-blue-600">{requesterDashboard.stats.activeContracts}</div>
                      <div className="text-sm text-gray-600">Active Services</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-yellow-600">{requesterDashboard.stats.pendingRequests}</div>
                      <div className="text-sm text-gray-600">Pending Requests</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-2xl font-bold text-purple-600">{requesterDashboard.stats.totalContracts}</div>
                      <div className="text-sm text-gray-600">Total Contracts</div>
                    </div>
                  </div>

                  {/* Active Services */}
                  {requesterDashboard.activeServices && requesterDashboard.activeServices.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Active Services ({requesterDashboard.activeServices.length})</h4>
                      <div className="space-y-2">
                        {requesterDashboard.activeServices.slice(0, 2).map((service) => (
                          <div key={service.id} className="p-3 bg-white rounded-lg border">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{service.serviceTitle}</p>
                                <p className="text-xs text-gray-600">Provided by {service.providerName}</p>
                                <p className="text-xs text-gray-500">{formatDate(service.startDate)}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-sm">${service.totalAmount}</p>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Past Services */}
                  {requesterDashboard.pastServices && requesterDashboard.pastServices.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Past Services ({requesterDashboard.pastServices.length})</h4>
                      <div className="space-y-2">
                        {requesterDashboard.pastServices.slice(0, 2).map((service) => (
                          <div key={service.id} className="p-3 bg-white rounded-lg border">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{service.serviceTitle}</p>
                                <p className="text-xs text-gray-600">Provided by {service.providerName}</p>
                                <p className="text-xs text-gray-500">Completed {formatDate(service.updatedAt)}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-sm">${service.totalAmount}</p>
                                {getStatusBadge(service.status)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">Click "Load Dashboard Data" to see requester dashboard</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Key Differences */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Key Differences Between Provider and Requester Dashboards</CardTitle>
            <CardDescription>
              Understanding how the dashboard adapts based on user type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-600 mb-3">Provider Dashboard Features:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Earnings tracking</strong> - Total and monthly earnings</li>
                  <li>• <strong>Pending requests</strong> - New service requests to accept/decline</li>
                  <li>• <strong>Upcoming services</strong> - Confirmed and in-progress services</li>
                  <li>• <strong>Completed services</strong> - Finished services and payment history</li>
                  <li>• <strong>Rating and reviews</strong> - Client feedback and ratings</li>
                  <li>• <strong>Availability management</strong> - Set working hours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-600 mb-3">Requester Dashboard Features:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Service requests</strong> - Track requests made to providers</li>
                  <li>• <strong>Active services</strong> - Ongoing service contracts</li>
                  <li>• <strong>Past services</strong> - Completed service history</li>
                  <li>• <strong>Pending requests</strong> - Awaiting provider response</li>
                  <li>• <strong>Service browsing</strong> - Find and book new services</li>
                  <li>• <strong>Payment tracking</strong> - Monitor service costs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 