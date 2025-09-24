import LiveViewCard from './live-view-card';
import SystemStatusCard from './system-status-card';

const MonitoringView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SystemStatusCard />
      <LiveViewCard />
    </div>
  );
};

export default MonitoringView;
