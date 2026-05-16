import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-secondary-900">Dashboard</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-secondary-200 bg-white p-6">
          <p className="text-sm text-secondary-500">Total Users</p>
          <p className="mt-1 text-3xl font-bold text-secondary-900">1,234</p>
        </div>
        <div className="rounded-xl border border-secondary-200 bg-white p-6">
          <p className="text-sm text-secondary-500">Revenue</p>
          <p className="mt-1 text-3xl font-bold text-secondary-900">$45,678</p>
        </div>
        <div className="rounded-xl border border-secondary-200 bg-white p-6">
          <p className="text-sm text-secondary-500">Active Sessions</p>
          <p className="mt-1 text-3xl font-bold text-secondary-900">456</p>
        </div>
      </div>
    </>
  );
}
