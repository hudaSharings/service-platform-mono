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
  Search
} from "lucide-react";
import Link from "next/link";

interface UserDashboard {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
    profilePictureUrl?: string;
  };
  stats: {
    totalServices: number;
    totalContracts: number;
    totalEarnings: number;
    averageRating: number;
    activeContracts: number;
  };
  recentContracts: Array<{
    id: string;
    contractNumber: string;
    service: {
      title: string;
      basePrice: number;
    };
    status: string;
    createdAt: string;
  }>;
  recentServices: Array<{
    id: string;
    title: string;
    basePrice: number;
    location: string;
    isActive: boolean;
  }>;
}

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<UserDashboard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.success) {
        setDashboard(result.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "Completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "Cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {dashboard.user.firstName}!
              </h1>
              <p className="text-gray-600">
                {dashboard.user.userType} • {dashboard.user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Services</CardTitle>
              <Briefcase className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboard.stats.totalServices}</div>
              <p className="text-xs text-muted-foreground">Your service listings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboard.stats.totalContracts}</div>
              <p className="text-xs text-muted-foreground">Completed contracts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${dashboard.stats.totalEarnings}</div>
              <p className="text-xs text-muted-foreground">Your total earnings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboard.stats.averageRating.toFixed(1)}/5.0</div>
              <p className="text-xs text-muted-foreground">Your service rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services">
                <Button className="w-full flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Browse Services
                </Button>
              </Link>
              {dashboard.user.userType === "Provider" && (
                <Link href="/services/create">
                  <Button className="w-full flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Service
                  </Button>
                </Link>
              )}
              <Link href="/contracts">
                <Button className="w-full flex items-center gap-2" variant="outline">
                  <FileText className="h-4 w-4" />
                  View Contracts
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contracts">Recent Contracts</TabsTrigger>
            <TabsTrigger value="services">My Services</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Contracts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Active Contracts ({dashboard.stats.activeContracts})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    You have {dashboard.stats.activeContracts} active contracts.
                  </p>
                  <Link href="/contracts">
                    <Button variant="outline" size="sm">
                      View All Contracts
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contracts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Contracts</CardTitle>
                <CardDescription>Your latest contract activities</CardDescription>
              </CardHeader>
              <CardContent>
                {dashboard.recentContracts.length > 0 ? (
                  <div className="space-y-4">
                    {dashboard.recentContracts.map((contract) => (
                      <div key={contract.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium">{contract.contractNumber}</p>
                          <p className="text-sm text-gray-600">{contract.service.title}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(contract.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-medium">${contract.service.basePrice}</p>
                          </div>
                          {getStatusBadge(contract.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No contracts yet.</p>
                    <Link href="/services">
                      <Button className="mt-4">Browse Services</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Services</CardTitle>
                <CardDescription>Services you've created or bookmarked</CardDescription>
              </CardHeader>
              <CardContent>
                {dashboard.recentServices.length > 0 ? (
                  <div className="space-y-4">
                    {dashboard.recentServices.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium">{service.title}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            {service.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-medium">${service.basePrice}</p>
                          </div>
                          {service.isActive ? (
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          ) : (
                            <Badge variant="secondary">Inactive</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No services yet.</p>
                    {dashboard.user.userType === "Provider" ? (
                      <Link href="/services/create">
                        <Button className="mt-4">Create Service</Button>
                      </Link>
                    ) : (
                      <Link href="/services">
                        <Button className="mt-4">Browse Services</Button>
                      </Link>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 