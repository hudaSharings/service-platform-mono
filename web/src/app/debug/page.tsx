"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const runDebugTests = async () => {
    setLoading(true);
    const results: any = {};

    try {
      // Test 1: Check environment variables
      results.environment = {
        NEXT_PUBLIC_USE_MOCK_API: process.env.NEXT_PUBLIC_USE_MOCK_API,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        computed: process.env.NEXT_PUBLIC_USE_MOCK_API === 'true' || !process.env.NEXT_PUBLIC_API_URL
      };

      // Test 2: Test categories API
      try {
        const categories = await api.getCategories();
        results.categories = {
          success: true,
          count: categories.length,
          data: categories.slice(0, 3) // Show first 3
        };
      } catch (error: any) {
        results.categories = {
          success: false,
          error: error.message
        };
      }

      // Test 3: Test services API
      try {
        const services = await api.getServices(1, 10, {});
        results.services = {
          success: true,
          count: services.services.length,
          total: services.total,
          data: services.services.slice(0, 2) // Show first 2
        };
      } catch (error: any) {
        results.services = {
          success: false,
          error: error.message
        };
      }

      // Test 4: Test dashboard stats
      try {
        const stats = await api.getDashboardStats();
        results.dashboard = {
          success: true,
          data: stats
        };
      } catch (error: any) {
        results.dashboard = {
          success: false,
          error: error.message
        };
      }

    } catch (error: any) {
      results.generalError = error.message;
    }

    setDebugInfo(results);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Debug Page</h1>
      
      <Button onClick={runDebugTests} disabled={loading} className="mb-8">
        {loading ? "Running Tests..." : "Run Debug Tests"}
      </Button>

      {Object.keys(debugInfo).length > 0 && (
        <div className="space-y-6">
          {/* Environment Info */}
          <Card>
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>NEXT_PUBLIC_USE_MOCK_API:</span>
                  <Badge variant={debugInfo.environment?.NEXT_PUBLIC_USE_MOCK_API === 'true' ? 'default' : 'secondary'}>
                    {debugInfo.environment?.NEXT_PUBLIC_USE_MOCK_API || 'undefined'}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>NEXT_PUBLIC_API_URL:</span>
                  <span>{debugInfo.environment?.NEXT_PUBLIC_API_URL || 'undefined'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Use Mock API (computed):</span>
                  <Badge variant={debugInfo.environment?.computed ? 'default' : 'secondary'}>
                    {debugInfo.environment?.computed ? 'true' : 'false'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Categories Test */}
          <Card>
            <CardHeader>
              <CardTitle>Categories API Test</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={debugInfo.categories?.success ? 'default' : 'destructive'} className="mb-2">
                {debugInfo.categories?.success ? 'SUCCESS' : 'FAILED'}
              </Badge>
              {debugInfo.categories?.success ? (
                <div>
                  <p>Found {debugInfo.categories.count} categories</p>
                  <div className="mt-2 space-y-1">
                    {debugInfo.categories.data?.map((cat: any) => (
                      <div key={cat.id} className="text-sm">
                        {cat.name} - {cat.description}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-red-500">{debugInfo.categories?.error}</p>
              )}
            </CardContent>
          </Card>

          {/* Services Test */}
          <Card>
            <CardHeader>
              <CardTitle>Services API Test</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={debugInfo.services?.success ? 'default' : 'destructive'} className="mb-2">
                {debugInfo.services?.success ? 'SUCCESS' : 'FAILED'}
              </Badge>
              {debugInfo.services?.success ? (
                <div>
                  <p>Found {debugInfo.services.count} services (Total: {debugInfo.services.total})</p>
                  <div className="mt-2 space-y-1">
                    {debugInfo.services.data?.map((service: any) => (
                      <div key={service.id} className="text-sm">
                        {service.title} - ${service.hourlyRate}/hr
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-red-500">{debugInfo.services?.error}</p>
              )}
            </CardContent>
          </Card>

          {/* Dashboard Test */}
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Stats Test</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={debugInfo.dashboard?.success ? 'default' : 'destructive'} className="mb-2">
                {debugInfo.dashboard?.success ? 'SUCCESS' : 'FAILED'}
              </Badge>
              {debugInfo.dashboard?.success ? (
                <div className="space-y-1">
                  <div>Total Users: {debugInfo.dashboard.data.totalUsers}</div>
                  <div>Total Services: {debugInfo.dashboard.data.totalServices}</div>
                  <div>Total Contracts: {debugInfo.dashboard.data.totalContracts}</div>
                  <div>Total Revenue: ${debugInfo.dashboard.data.totalRevenue}</div>
                </div>
              ) : (
                <p className="text-red-500">{debugInfo.dashboard?.error}</p>
              )}
            </CardContent>
          </Card>

          {debugInfo.generalError && (
            <Card>
              <CardHeader>
                <CardTitle>General Error</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-500">{debugInfo.generalError}</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-bold mb-2">How to use this debug page:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Click "Run Debug Tests" to test all APIs</li>
          <li>Check if environment variables are set correctly</li>
          <li>Verify that Categories and Services APIs return data</li>
          <li>If tests fail, check the browser console for errors</li>
          <li>Make sure you're running with mock API enabled</li>
        </ol>
      </div>
    </div>
  );
} 