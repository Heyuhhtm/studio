import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InfoTile = ({ label, value, status }: { label: string; value: string; status?: 'active' | 'inactive' }) => (
    <div className="bg-background p-4 rounded-lg">
        <span className="text-sm text-muted-foreground">{label}</span>
        <p className="text-lg font-semibold">{value}</p>
        {status === 'active' && (
            <span className="flex items-center text-sm text-green-500">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>Active
            </span>
        )}
    </div>
)

const SystemStatusCard = () => {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl font-headline">System Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <InfoTile label="Vehicle ID" value="ESP12-VEHCL-007" status="active" />
                    <InfoTile label="Last Update" value="2s ago" />
                    <InfoTile label="Incidents" value="0" />
                    <InfoTile label="Alerts Today" value="0" />
                </div>
            </CardContent>
        </Card>
    );
};

export default SystemStatusCard;
