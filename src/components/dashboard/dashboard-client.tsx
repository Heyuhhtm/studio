"use client";

import React, { useState, useEffect } from 'react';

// SVG icons
const IconShieldCheckmark = ({ size, className }: { size: number; className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 512 512">
    <path d="M467.5 125.1L256 16.5l-211.5 108.6A48.04 48.04 0 0016 167.3V448a48 48 0 0048 48h384a48 48 0 0048-48V167.3a48.04 48.04 0 00-20.5-42.2zM256 384a80 80 0 1180-80 80.09 80.09 0 01-80 80zm48-128h-96a48 48 0 000 96h96a48 48 0 000-96z" fill="currentColor"></path>
  </svg>
);
const IconWarning = ({ size, className }: { size: number; className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 512 512">
    <path d="M448 416L256 48 64 416h384zm-192-32a32 32 0 1132-32 32 32 0 01-32 32zm0-64a32 32 0 11-32-32h64a32 32 0 01-32 32z" fill="currentColor"></path>
  </svg>
);
const IconHeart = ({ size, className }: { size: number; className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 512 512">
    <path d="M256 448l-25-25a256 256 0 01-118-107C72 264 48 224 48 184a144 144 0 01288 0c0 40-24 80-65 132-13 16-25 25-25 25z" fill="currentColor"></path>
  </svg>
);
const IconCall = ({ size, className }: { size: number; className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 512 512">
    <path d="M497.39 361.8l-112-48a24 24 0 00-27.14 6.64l-1.34 1.57a160 160 0 01-180.62-180.62l1.57-1.34a24 24 0 006.64-27.14l-48-112a24 24 0 00-24.18-12.27A23.89 23.89 0 00216.09 3.2C101.91 3.2 11.2 92.49 11.2 208a320 320 0 00320 320c115.51 0 204.8-90.71 204.8-204.8a24 24 0 00-12.27-24.18z" fill="currentColor"></path>
  </svg>
);
const IconSpeedometer = ({ size, className }: { size: number; className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 512 512">
    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 384c-97.2 0-176-78.8-176-176S158.8 80 256 80s176 78.8 176 176-78.8 176-176 176z" fill="currentColor"></path>
  </svg>
);



const DashboardClient = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://172.16.142.125:5000/api/status')
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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 flex flex-col items-center font-sans">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 flex flex-col items-center font-sans">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 flex flex-col items-center font-sans">
      {/* Header */}
      <div className={`w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden mb-8`}>
        <div className={`p-4 sm:p-6 flex justify-between items-center text-white ${isEmergency ? 'bg-red-700 animate-pulse' : 'bg-gray-800'}`}>
          <div className="flex items-center space-x-2">
            <IconShieldCheckmark size={24} className="text-white" />
            <h1 className="text-xl sm:text-2xl font-bold">Live Dashboard - {isEmergency ? 'Emergency Alert' : 'Monitoring'}</h1>
          </div>
          <button onClick={toggleView} className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: isEmergency ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}>
            Switch to {isEmergency ? 'Monitoring' : 'Emergency'} View
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-8">

          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Patient Info */}
            <div className="rounded-2xl p-6 bg-gray-200 dark:bg-gray-800 shadow-lg flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Patient Info</h2>
              <p><strong>Name:</strong> {data?.patient_info?.name || 'N/A'}</p>
              <p><strong>Blood Type:</strong> {data?.patient_info?.blood_type || 'N/A'}</p>
              <p><strong>Pre-existing Conditions:</strong> {data?.patient_info?.pre_existing_conditions || 'N/A'}</p>
              <p><strong>Emergency Contact:</strong> {data?.patient_info?.emergency_contact || 'N/A'}</p>
              <p><strong>Location: Lat:</strong> {data?.last_data?.location?.lat|| 'N/A'}</p>
              <p><strong>Location: Lon:</strong> {data?.last_data?.location?.lon || 'N/A'}</p>
            </div>

            {/* Vitals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center">
                <IconHeart size={40} className="text-red-500 mb-2" />
                <span className="text-xl font-bold">{data?.last_data?.impact?.g_force || 'N/A'} G</span>
                <span className="text-sm text-gray-500">Impact Force</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center">
                <IconSpeedometer size={40} className="text-blue-500 mb-2" />
                <span className="text-xl font-bold">{data?.last_data?.environment?.in_car_motion ? 'Moving' : 'Stationary'}</span>
                <span className="text-sm text-gray-500">Car Motion</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center">
                <IconWarning size={40} className="text-yellow-500 mb-2" />
                <span className="text-xl font-bold">{data?.last_data?.environment?.is_voice_detected ? 'Detected' : 'None'}</span>
                <span className="text-sm text-gray-500">Voice Detection</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center">
                <IconCall size={40} className="text-green-500 mb-2" />
                <span className="text-xl font-bold">{data?.last_data?.manual_override?.sos_button_pressed ? 'Pressed' : 'Not Pressed'}</span>
                <span className="text-sm text-gray-500">SOS Status</span>
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
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${(data?.last_data?.location?.lon || 0)-0.01}%2C${(data?.last_data?.location?.lat || 0)-0.01}%2C${(data?.last_data?.location?.lon || 0)+0.01}%2C${(data?.last_data?.location?.lat || 0)+0.01}&layer=mapnik&marker=${data?.last_data?.location?.lat || 0}%2C${data?.last_data?.location?.lon || 0}`}
                  title="Live Location"
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>

            {/* Emergency Contacts */}
            <div className="rounded-2xl p-6 bg-gray-200 dark:bg-gray-800 shadow-lg flex flex-col gap-2">
              <h2 className="text-lg font-semibold mb-2">Emergency Contacts</h2>
              <div className="flex items-center gap-2"><IconCall size={20} className="text-gray-500" /><span>{data?.emergency_details?.services_alerted?.hospital?.name || 'N/A'}</span></div>
              <div className="flex items-center gap-2"><IconCall size={20} className="text-gray-500" /><span>{data?.emergency_details?.services_alerted?.police?.name || 'N/A'}</span></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 text-center text-gray-500 text-sm border-t dark:border-gray-700 mt-6">
      
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
