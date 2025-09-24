import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const MapCard = () => {
  return (
    <Card className="h-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Live Accident Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64 rounded-xl overflow-hidden mb-4 relative border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28006.182442220967!2d77.19961633519842!3d28.613939527926214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b76d05907%3A0x6b2b7a95b3b1f5c!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1628163600000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Live Accident Location Map"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[50%]"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-destructive rounded-full animate-ping"></div>
            <MapPin size={32} className="relative text-destructive fill-destructive-foreground" />
          </div>
        </div>
        <div className="bg-background p-4 rounded-lg">
          <p className="font-bold mb-2 font-headline">Live Log:</p>
          <ul className="space-y-1 text-sm text-muted-foreground font-mono">
            <li>[12:01] High Impact Detected</li>
            <li>[12:02] GPS: (Lat: 28.61, Lng: 77.20)</li>
            <li>[12:03] AI: CRITICAL ALERT</li>
            <li>[12:04] Alerting Services...</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapCard;
