"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import ServiceModal from "./ServiceModal";

interface Service {
  id: string;
  title: string;
  description: string;
  categoryName: string;
  hourlyRate: number;
  location: string;
  isAvailable: boolean;
  isVerified: boolean;
  createdAt: string;
}

export default function MyServicesSection({ userId }: { userId: string }) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editService, setEditService] = useState<any>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const result = await api.getServices(1, 50, { providerId: userId });
      if (result.success) {
        setServices(result.data.services || result.data);
      } else {
        toast.error(result.message || "Failed to load your services");
      }
    } catch (error) {
      toast.error("Failed to load your services");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (serviceId: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    try {
      await api.deleteService(serviceId);
      toast.success("Service deleted");
      fetchServices();
    } catch (error) {
      toast.error("Failed to delete service");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">My Services</h2>
        <Button onClick={() => { setEditService(null); setModalOpen(true); }}>
          Add Service
        </Button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : services.length === 0 ? (
        <div>No services found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(service => (
            <Card key={service.id}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 text-gray-600">{service.description}</div>
                <div className="mb-2 text-sm">Category: {service.categoryName}</div>
                <div className="mb-2 text-sm">Location: {service.location}</div>
                <div className="mb-2 text-sm">Hourly Rate: ${service.hourlyRate}</div>
                <div className="mb-2 text-sm">
                  Status: {service.isAvailable ? "Available" : "Unavailable"}
                </div>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" onClick={() => { setEditService(service); setModalOpen(true); }}>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => handleDelete(service.id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <ServiceModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSuccess={fetchServices}
        initialData={editService}
        providerId={userId}
      />
    </div>
  );
} 