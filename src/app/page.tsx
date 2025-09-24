'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, AlertTriangle, Zap, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'live-view-placeholder');
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white p-4">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Road view from a car"
            fill
            className="object-cover -z-10 brightness-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="animate-fadeInSlideUp space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline">
            The Future of Road Safety is Here.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            SafeSphere's AI-powered platform predicts, prevents, and responds to accidents in real-time, keeping you and your loved ones safe on the road.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground font-bold shadow-lg hover:scale-105 transition-transform" onClick={() => setShowDetails(true)}>
              Read More
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold shadow-lg hover:scale-105 transition-transform border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Read More Section */}
      <section
        className={cn(
          "bg-card transition-all duration-500 ease-in-out overflow-hidden",
          showDetails ? "max-h-screen py-16 md:py-24" : "max-h-0 py-0"
        )}
      >
        <div className="container mx-auto px-4 relative">
            <Button variant="ghost" size="icon" className="absolute -top-8 right-4" onClick={() => setShowDetails(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-8 text-center">About</h2>
            <p className="max-w-4xl mx-auto text-lg text-muted-foreground text-justify">
                The Accident Detector project is designed to enhance road safety and provide immediate assistance to accident victims. By using multiple sensors, including heart-rate monitors, sound detectors, and accelerometers/gyroscopes, the system can accurately detect vehicle accidents in real time. Once an accident is detected, the system automatically sends alerts via GSM/GPRS to the nearest hospital, police station, and registered family contacts, sharing the victim’s live location. This ensures that help arrives promptly, potentially saving lives and reducing the severity of injuries. Additionally, the system provides peace of mind to both drivers and their families, as it continuously monitors safety and acts as an intelligent emergency response solution. Overall, this project bridges the gap between accident occurrence and immediate assistance, making travel safer and more reliable for all users.
            </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why SafeSphere?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A comprehensive safety net for every journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="animate-fadeInSlideUp" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline mt-4">Real-time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Live tracking of vitals and vehicle data to assess risk levels continuously.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fadeInSlideUp" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline mt-4">Instant Accident Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI instantly detects accidents using sensor data and triggers alerts.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fadeInSlideUp" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline mt-4">Automated Emergency Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically contacts emergency services with your location and vitals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Monitor</h3>
              <p className="text-muted-foreground max-w-xs">The app continuously monitors driver vitals and vehicle status.</p>
            </div>
            <ArrowRight className="hidden md:block text-primary h-12 w-12" />
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Detect</h3>
              <p className="text-muted-foreground max-w-xs">AI analyzes data in real-time to detect anomalies or accidents.</p>
            </div>
            <ArrowRight className="hidden md:block text-primary h-12 w-12" />
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Alert</h3>
              <p className="text-muted-foreground max-w-xs">Emergency services and contacts are instantly alerted with critical data.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-background text-center">
         <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Ready to Drive with Confidence?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join SafeSphere today and experience a new standard of road safety.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold shadow-lg hover:scale-105 transition-transform">
                <Link href="/dashboard">Get Started Now</Link>
            </Button>
          </div>
         </div>
      </section>
    </div>
  );
}
