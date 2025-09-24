"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import EmergencyView from './emergency-view';
import MonitoringView from './monitoring-view';
import ActivityChart from './activity-chart';
import EmergencyContactsCard from './emergency-contacts-card';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

const DashboardClient = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [heartRate, setHeartRate] = useState(84);
  const [spo2, setSpo2] = useState(98);
  const [bloodPressure, setBloodPressure] = useState('120/80');

  useEffect(() => {
    const interval = setInterval(() => {
      if (isEmergency) {
        setHeartRate(prev => Math.min(160, Math.max(100, prev + (Math.random() > 0.5 ? 5 : -5))));
        setSpo2(prev => Math.min(99, Math.max(90, prev + (Math.random() > 0.5 ? -1 : 1))));
      } else {
        setHeartRate(prev => Math.min(100, Math.max(60, prev + (Math.random() > 0.5 ? 1 : -1))));
        setSpo2(98);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isEmergency]);

  const toggleView = () => {
    setIsEmergency(!isEmergency);
  };

  const headerBgClass = isEmergency ? 'bg-destructive critical-pulse' : 'bg-gray-800 dark:bg-card';
  const headerTextClass = isEmergency ? 'text-destructive-foreground' : 'text-primary-foreground dark:text-foreground';

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <Card className="w-full overflow-hidden shadow-2xl animate-fadeInSlideUp">
        <CardHeader className={cn("p-4 sm:p-6 flex flex-row justify-between items-center", headerBgClass)}>
          <div className="flex items-center space-x-3">
            {isEmergency ? (
              <AlertTriangle size={28} className={headerTextClass} />
            ) : (
              <ShieldCheck size={28} className={cn(headerTextClass, 'text-green-400')} />
            )}
            <h1 className={cn("text-xl sm:text-2xl font-bold font-headline", headerTextClass)}>
              {isEmergency ? 'Emergency Alert' : 'Live Monitoring'}
            </h1>
          </div>
          <Button
            onClick={toggleView}
            variant="outline"
            className={cn(
              "font-semibold transition-all duration-300 transform hover:scale-105",
              isEmergency ? "bg-white/20 border-white/30 hover:bg-white/30 text-white" : "bg-black/10 border-black/20 hover:bg-black/20 text-white dark:text-foreground dark:bg-background dark:hover:bg-accent/10"
            )}
          >
            Switch to {isEmergency ? 'Monitoring' : 'Emergency'} View
          </Button>
        </CardHeader>
        <CardContent className="p-4 sm:p-8">
          {isEmergency ? (
            <EmergencyView heartRate={heartRate} spo2={spo2} bloodPressure={bloodPressure} />
          ) : (
            <MonitoringView />
          )}
        </CardContent>

        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ActivityChart />
          <EmergencyContactsCard />
        </div>
        
        <CardFooter className="p-4 sm:p-6 text-center text-muted-foreground text-sm border-t">
          <p>© {new Date().getFullYear()} SafeSpher. All rights reserved.</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardClient;
