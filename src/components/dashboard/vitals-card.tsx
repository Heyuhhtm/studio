import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, AlertTriangle, User, Phone } from 'lucide-react';
import BloodPressureIcon from '../icons/blood-pressure-icon';
import Spo2Icon from '../icons/spo2-icon';
import { Button } from '../ui/button';

interface VitalsCardProps {
  heartRate: number;
  spo2: number;
  bloodPressure: string;
}

const VitalsCard = ({ heartRate, spo2, bloodPressure }: VitalsCardProps) => {
  return (
    <Card className="h-full shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-headline">Patient & Vitals</CardTitle>
        <User className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col items-center p-4 rounded-lg bg-background">
            <Heart size={40} className="text-destructive mb-2" />
            <span className="text-3xl font-bold">{heartRate} <span className="text-base font-normal">bpm</span></span>
            <span className="text-sm text-muted-foreground">HEART RATE</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-background">
            <Spo2Icon className="text-blue-500 mb-2 h-10 w-10" />
            <span className="text-3xl font-bold">{spo2}<span className="text-base font-normal">%</span></span>
            <span className="text-sm text-muted-foreground">SpO2</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-background">
            <BloodPressureIcon className="text-green-500 mb-2 h-10 w-10" />
            <span className="text-2xl font-bold">{bloodPressure}</span>
            <span className="text-sm text-muted-foreground">BLOOD PRESSURE</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-background text-center">
            <AlertTriangle size={40} className="text-yellow-500 mb-2" />
            <span className="text-base font-bold">Known Conditions</span>
            <span className="text-sm text-muted-foreground">Asthma, Penicillin Allergy</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1 text-lg font-bold transition-transform hover:scale-105 shadow-lg" size="lg" variant="destructive">
            <a href="tel:911">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency
            </a>
          </Button>
          <Button className="flex-1 text-lg font-bold transition-transform hover:scale-105 shadow-lg" size="lg" variant="secondary">
            Share Location
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VitalsCard;
