import { Facebook, Linkedin, Twitter, Youtube, Shield } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Copyright Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                N
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Copyright 2025 All Rights Reserved.</p>
            <p className="text-xs text-muted-foreground">
              Nauts and the Nauts logo are registered trademarks of Nauts, Inc. in The United States and other countries.
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Predictive Collision Alerts</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Driver Behavior Alerts</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Self-Guided Coaching</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Manager-Led Coaching</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Incident Reporting</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">On-Demand Video</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary-foreground">About</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">News</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Events</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Blog</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Careers</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Glossary</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Partners</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">View all resources</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground">Geotab Marketplace</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Linkedin className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Youtube className="h-5 w-5" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="/login" className="hover:text-primary-foreground">Customer login</Link>
            <Link href="#" className="hover:text-primary-foreground">Site privacy</Link>
            <Link href="#" className="hover:text-primary-foreground">User privacy</Link>
            <Link href="#" className="hover:text-primary-foreground">Ad notice</Link>
            <Link href="#" className="hover:text-primary-foreground">Copyright</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
