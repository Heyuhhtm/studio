import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] text-center p-4">
      <div className="bg-card p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl animate-fadeInSlideUp">
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline mb-4 text-primary">
          Welcome to SafeSpher
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground animate-fadeInSlideUp"
          style={{ animationDelay: '0.3s' }}
        >
          Your safety is our priority.
        </p>
        <div
          className="mt-8 animate-fadeInSlideUp"
          style={{ animationDelay: '0.6s' }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:scale-105 transition-transform">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
