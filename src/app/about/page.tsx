import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
          SafeSphere
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We are dedicated to revolutionizing road safety through cutting-edge AI technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-foreground">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To save lives by providing an intelligent, real-time accident detection and emergency response system that is accessible to everyone.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Zap className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-foreground">Our Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our platform leverages GenAI to monitor vitals, vehicle data, and location, automatically alerting emergency services in critical situations.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-foreground">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are a passionate team of engineers, designers, and AI experts committed to making the roads a safer place for all.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
