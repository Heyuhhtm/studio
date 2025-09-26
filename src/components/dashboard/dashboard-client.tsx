"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertTriangle, Heart, Phone, Gauge, Mic, MapPin } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const DashboardClient = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = () => {
      const apiUrl = 'http://172.16.142.125:5000/api/status';
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setIsEmergency(data.status === "CRITICAL");
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 3000); // Fetch every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const toggleView = () => setIsEmergency(!isEmergency);

  if (loading) {
    return (
      <div className="w-full max-w-6xl p-4 sm:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <Skeleton className="h-48 w-full rounded-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-xl" />
              <Skeleton className="h-28 w-full rounded-xl" />
              <Skeleton className="h-28 w-full rounded-xl" />
              <Skeleton className="h-28 w-full rounded-xl" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <Skeleton className="h-64 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center text-center p-4">
        <div className="text-xl text-destructive">Error: Could not connect to the API.</div>
        <p className="text-sm text-muted-foreground mt-2 max-w-md">
          This could be due to a network issue, the API server being offline, or a CORS policy. Please ensure the API server is running and accessible.
        </p>
         <p className="text-xs text-muted-foreground mt-2">Details: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl">
      {/* Header */}
      <div className={`w-full rounded-3xl shadow-2xl overflow-hidden mb-8`}>
        <div className={`p-4 sm:p-6 flex justify-between items-center text-primary-foreground ${isEmergency ? 'bg-destructive animate-pulse' : 'bg-card-foreground'}`}>
          <div className="flex items-center space-x-2">
            <ShieldCheck size={24} />
            <h1 className="text-xl sm:text-2xl font-bold">Live Dashboard - {isEmergency ? 'Emergency Alert' : 'Monitoring'}</h1>
          </div>
          <button onClick={toggleView} className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: isEmergency ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}>
            Switch to {isEmergency ? 'Monitoring' : 'Emergency'} View
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-8 bg-card rounded-b-3xl">

          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Patient Info */}
            <div className="rounded-2xl p-6 bg-background shadow-lg flex flex-col">
              <h2 className="text-lg font-semibold mb-4 text-foreground">Patient Info</h2>
              <p className="text-muted-foreground"><strong>Name:</strong> {data?.patient_info?.name || 'N/A'}</p>
              <p className="text-muted-foreground"><strong>Blood Type:</strong> {data?.patient_info?.blood_type || 'N/A'}</p>
              <p className="text-muted-foreground"><strong>Pre-existing Conditions:</strong> {data?.patient_info?.pre_existing_conditions || 'N/A'}</p>
              <p className="text-muted-foreground"><strong>Emergency Contact:</strong> {data?.patient_info?.emergency_contact || 'N/A'}</p>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Lat: {data?.last_data?.location?.lat|| 'N/A'}, Lon: {data?.last_data?.location?.lon || 'N/A'}
              </p>
            </div>

            {/* Vitals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center">
                <Heart size={40} className="text-destructive mb-2" />
                <span className="text-xl font-bold text-foreground">{data?.last_data?.impact?.g_force || 'N/A'} G</span>
                <span className="text-sm text-muted-foreground">Impact Force</span>
              </div>
              <div className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center">
                <Gauge size={40} className="text-primary mb-2" />
                <span className="text-xl font-bold text-foreground">{data?.last_data?.environment?.in_car_motion ? 'Moving' : 'Stationary'}</span>
                <span className="text-sm text-muted-foreground">Car Motion</span>
              </div>
              <div className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center">
                <Mic size={40} className="text-yellow-500 mb-2" />
                <span className="text-xl font-bold text-foreground">{data?.last_data?.environment?.is_voice_detected ? 'Detected' : 'None'}</span>
                <span className="text-sm text-muted-foreground">Voice Detection</span>
              </div>
              <div className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center">
                <AlertTriangle size={40} className="text-green-500 mb-2" />
                <span className="text-xl font-bold text-foreground">{data?.last_data?.manual_override?.sos_button_pressed ? 'Pressed' : 'Not Pressed'}</span>
                <span className="text-sm text-muted-foreground">SOS Status</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-lg relative">
              <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${(data?.last_data?.location?.lon || 0)-0.01}%2C${(data?.last_data?.location?.lat || 0)-0.01}%2C${(data?.last_data?.location?.lon || 0)+0.01}%2C${(data?.last_data?.location?.lat || 0)+0.01}&layer=mapnik&marker=${data?.last_data?.location?.lat || 0}%2C${data?.last_data?.location?.lon || 0}`}
                  title="Live Location"
                  style={{ border: 0 }}
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>

            {/* Emergency Contacts */}
            <div className="rounded-2xl p-6 bg-background shadow-lg flex flex-col gap-2">
              <h2 className="text-lg font-semibold mb-2 text-foreground">Emergency Services Alerted</h2>
              <div className="flex items-center gap-2 text-muted-foreground"><Phone size={20} className="text-primary" /><span>{data?.emergency_details?.services_alerted?.hospital?.name || 'N/A'}</span></div>
              <div className="flex items-center gap-2 text-muted-foreground"><Phone size={20} className="text-primary" /><span>{data?.emergency_details?.services_alerted?.police?.name || 'N/A'}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
