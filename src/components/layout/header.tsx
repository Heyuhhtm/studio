"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Shield } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-card shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Shield
              className={cn(
                "h-8 w-8 transition-colors",
                scrolled || pathname !== '/' ? "text-primary" : "text-white"
              )}
            />
            <h1
              className={cn(
                "text-2xl font-bold font-headline transition-colors",
                scrolled || pathname !== '/' ? "text-primary" : "text-white"
              )}
            >
              SafeSphere
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-semibold transition-colors relative",
                  scrolled || pathname !== '/' ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white",
                  pathname === link.href && (scrolled || pathname !== '/' ? "text-primary" : "text-white")
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className={cn(
                    "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full",
                    scrolled || pathname !== '/' ? "bg-accent": "bg-white"
                  )} />
                )}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  scrolled || pathname !== '/' ? "text-primary" : "text-white hover:bg-white/10"
                )}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "font-semibold text-lg hover:text-primary transition-colors",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
