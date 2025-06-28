"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestMockPage() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testCategories = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await api.getCategories();
      setCategories(result);
      console.log("Categories result:", result);
    } catch (err: any) {
      setError(err.message);
      console.error("Categories error:", err);
    } finally {
      setLoading(false);
    }
  };

  const testServices = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await api.getServices(1, 10, {});
      setServices(result.services);
      console.log("Services result:", result);
    } catch (err: any) {
      setError(err.message);
      console.error("Services error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Mock API Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Test Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={testCategories} disabled={loading} className="mb-4">
              {loading ? "Loading..." : "Load Categories"}
            </Button>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="space-y-2">
              {categories.map((cat: any) => (
                <div key={cat.id} className="p-2 border rounded">
                  <strong>{cat.name}</strong> - {cat.description}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Services</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={testServices} disabled={loading} className="mb-4">
              {loading ? "Loading..." : "Load Services"}
            </Button>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="space-y-2">
              {services.map((service: any) => (
                <div key={service.id} className="p-2 border rounded">
                  <strong>{service.title}</strong> - ${service.hourlyRate}/hr
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Environment Info</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>NEXT_PUBLIC_USE_MOCK_API:</strong> {process.env.NEXT_PUBLIC_USE_MOCK_API}</p>
          <p><strong>NEXT_PUBLIC_API_URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'Not set'}</p>
          <p><strong>USE_MOCK_API (computed):</strong> {process.env.NEXT_PUBLIC_USE_MOCK_API === 'true' || !process.env.NEXT_PUBLIC_API_URL ? 'true' : 'false'}</p>
        </div>
      </div>
    </div>
  );
} 