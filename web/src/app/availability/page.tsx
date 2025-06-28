"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  Clock,
  Save,
  CheckCircle,
  XCircle,
  AlertCircle,
  Settings
} from "lucide-react";
import { api } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { PageTransition } from "@/components/ui/page-transition";

interface Availability {
  id: string;
  userId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function AvailabilityPage() {
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push('/auth/login');
        return;
      }
      if (user?.userType !== 'Provider') {
        router.push('/dashboard');
        return;
      }
      fetchAvailability();
    }
  }, [isAuthenticated, authLoading, user]);

  const fetchAvailability = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const result = await api.getAvailability(user.id);
      setAvailability(result);
    } catch (error) {
      console.error("Error fetching availability:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      await api.updateAvailability(user.id, availability);
      setHasChanges(false);
      // Show success message
    } catch (error) {
      console.error("Error updating availability:", error);
      // Show error message
    } finally {
      setSaving(false);
    }
  };

  const updateDayAvailability = (dayOfWeek: number, field: keyof Availability, value: any) => {
    const updatedAvailability = availability.map(day => {
      if (day.dayOfWeek === dayOfWeek) {
        return { ...day, [field]: value };
      }
      return day;
    });
    setAvailability(updatedAvailability);
    setHasChanges(true);
  };

  const getDayAvailability = (dayOfWeek: number) => {
    return availability.find(day => day.dayOfWeek === dayOfWeek);
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.toTimeString().slice(0, 5);
    
    const todayAvailability = getDayAvailability(currentDay);
    if (!todayAvailability || !todayAvailability.isAvailable) {
      return { available: false, message: "Not available today" };
    }
    
    const isInRange = currentTime >= todayAvailability.startTime && currentTime <= todayAvailability.endTime;
    return {
      available: isInRange,
      message: isInRange ? "Available now" : "Available today",
      nextAvailable: todayAvailability.startTime
    };
  };

  // Show loading while auth is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading..." />
      </div>
    );
  }

  // Show loading while fetching availability data
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {/* Skeleton Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
              <Skeleton className="h-10 w-32" />
            </div>
            <SkeletonCard />
          </div>

          {/* Skeleton Schedule */}
          <SkeletonCard />
        </div>
      </div>
    );
  }

  const currentStatus = getCurrentStatus();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageTransition>
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Availability</h1>
                <p className="text-gray-600">Set your working hours and availability</p>
              </div>
              <div className="flex gap-2">
                {hasChanges && (
                  <Button onClick={handleSave} disabled={saving} className="bg-green-600 hover:bg-green-700">
                    {saving ? (
                      <LoadingSpinner size="sm" text="Saving..." />
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Current Status */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${
                      currentStatus.available ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {currentStatus.available ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {currentStatus.available ? "Available Now" : "Currently Unavailable"}
                      </h3>
                      <p className="text-gray-600">{currentStatus.message}</p>
                      {currentStatus.nextAvailable && (
                        <p className="text-sm text-gray-500">
                          Next available: {formatTime(currentStatus.nextAvailable)}
                        </p>
                      )}
                    </div>
                  </div>
                  <Badge variant={currentStatus.available ? "default" : "secondary"}>
                    {currentStatus.available ? "Online" : "Offline"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly Schedule
              </CardTitle>
              <CardDescription>
                Set your availability for each day of the week. Clients will only be able to book services during your available hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dayNames.map((dayName, index) => {
                  const dayAvailability = getDayAvailability(index);
                  const isAvailable = dayAvailability?.isAvailable || false;
                  const startTime = dayAvailability?.startTime || "09:00";
                  const endTime = dayAvailability?.endTime || "17:00";

                  return (
                    <div key={dayName} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-24">
                          <Label className="font-medium">{dayName}</Label>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={isAvailable}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                // If enabling, create or update the day
                                const existing = availability.find(day => day.dayOfWeek === index);
                                if (existing) {
                                  updateDayAvailability(index, 'isAvailable', true);
                                } else {
                                  const newDay: Availability = {
                                    id: `temp-${index}`,
                                    userId: user?.id || '',
                                    dayOfWeek: index,
                                    startTime: "09:00",
                                    endTime: "17:00",
                                    isAvailable: true
                                  };
                                  setAvailability([...availability, newDay]);
                                  setHasChanges(true);
                                }
                              } else {
                                updateDayAvailability(index, 'isAvailable', false);
                              }
                            }}
                          />
                          <Label className="text-sm">
                            {isAvailable ? "Available" : "Unavailable"}
                          </Label>
                        </div>
                      </div>
                      
                      {isAvailable && (
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Label className="text-sm">Start:</Label>
                            <Input
                              type="time"
                              value={startTime}
                              onChange={(e) => updateDayAvailability(index, 'startTime', e.target.value)}
                              className="w-24"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <Label className="text-sm">End:</Label>
                            <Input
                              type="time"
                              value={endTime}
                              onChange={(e) => updateDayAvailability(index, 'endTime', e.target.value)}
                              className="w-24"
                            />
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatTime(startTime)} - {formatTime(endTime)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-medium">Set Standard Hours</h3>
                  <p className="text-sm text-gray-600 mb-3">9 AM - 5 PM, Monday to Friday</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      const standardHours = [1, 2, 3, 4, 5].map(day => ({
                        id: `temp-${day}`,
                        userId: user?.id || '',
                        dayOfWeek: day,
                        startTime: "09:00",
                        endTime: "17:00",
                        isAvailable: true
                      }));
                      setAvailability(standardHours);
                      setHasChanges(true);
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium">Weekend Only</h3>
                  <p className="text-sm text-gray-600 mb-3">Saturday and Sunday</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      const weekendHours = [0, 6].map(day => ({
                        id: `temp-${day}`,
                        userId: user?.id || '',
                        dayOfWeek: day,
                        startTime: "10:00",
                        endTime: "18:00",
                        isAvailable: true
                      }));
                      setAvailability(weekendHours);
                      setHasChanges(true);
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-medium">Clear All</h3>
                  <p className="text-sm text-gray-600 mb-3">Remove all availability</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setAvailability([]);
                      setHasChanges(true);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
} 