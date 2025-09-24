import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const LiveViewCard = () => {
  const placeholder = PlaceHolderImages.find(p => p.id === 'live-view-placeholder');
  
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Live View & Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64 rounded-xl overflow-hidden mb-4 relative">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={placeholder.description}
              fill
              className="object-cover"
              data-ai-hint={placeholder.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
           <p className="absolute bottom-4 left-4 text-white font-semibold">Safety is a State of Mind</p>
        </div>
        <div className="bg-background p-4 rounded-lg">
          <span className="text-sm text-muted-foreground">Vehicle Location:</span>
          <p className="text-lg font-semibold">Lat: 28.6139, Lng: 77.2090</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveViewCard;
