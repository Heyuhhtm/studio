import VitalsCard from './vitals-card';
import MapCard from './map-card';

interface EmergencyViewProps {
  heartRate: number;
  spo2: number;
  bloodPressure: string;
}

const EmergencyView = ({ heartRate, spo2, bloodPressure }: EmergencyViewProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <VitalsCard heartRate={heartRate} spo2={spo2} bloodPressure={bloodPressure} />
      </div>
      <div className="lg:col-span-2">
        <MapCard />
      </div>
    </div>
  );
};

export default EmergencyView;
