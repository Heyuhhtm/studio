import DashboardClient from "@/components/dashboard/dashboard-client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - SafeSpher',
  description: 'Live monitoring and emergency dashboard.',
};

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <DashboardClient />
    </div>
  );
}
