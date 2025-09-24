import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Hospital, Siren } from 'lucide-react';
import { Button } from '../ui/button';

const contacts = [
    { name: "Hospital", number: "911", icon: <Hospital className="h-5 w-5 mr-3 text-red-500" /> },
    { name: "Police", number: "100", icon: <Siren className="h-5 w-5 mr-3 text-blue-500" /> },
    { name: "Family", number: "9876543210", icon: <Phone className="h-5 w-5 mr-3 text-green-500" /> },
]

const EmergencyContactsCard = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Emergency Contacts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {contacts.map((contact) => (
            <div key={contact.name} className="bg-background p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                    {contact.icon}
                    <div>
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{contact.number}</p>
                    </div>
                </div>
                <Button asChild variant="outline" size="sm">
                    <a href={`tel:${contact.number}`}>
                        <Phone className="h-4 w-4 mr-2" /> Call
                    </a>
                </Button>
            </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EmergencyContactsCard;
