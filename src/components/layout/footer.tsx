import { Facebook, Linkedin, Twitter, Youtube, Shield } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Copyright Section */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold font-headline text-foreground">
                SafeSphere
              </h1>
            </Link>
            <p className="text-sm text-muted-foreground">Copyright 2025 All Rights Reserved.</p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Predictive Collision Alerts</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Driver Behavior Alerts</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Self-Guided Coaching</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Manager-Led Coaching</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Incident Reporting</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">On-Demand Video</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">News</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Events</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Glossary</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Partners</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">View all resources</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Geotab Marketplace</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube className="h-5 w-5" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="/login" className="hover:text-primary">Customer login</Link>
            <Link href="#" className="hover:text-primary">Site privacy</Link>
            <Link href="#" className="hover:text-primary">User privacy</Link>
            <Link href="#" className="hover:text-primary">Ad notice</Link>
            <Link href="#" className="hover:text-primary">Copyright</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
