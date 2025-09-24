import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-4">
      <Card className="w-full max-w-sm animate-fadeInSlideUp shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline text-primary">Login</CardTitle>
          <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="safesphere_user" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:scale-105 transition-transform">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
