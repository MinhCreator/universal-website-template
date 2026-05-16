import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-secondary-900">Settings</h1>
      <p className="mt-2 text-secondary-600">Manage your account settings.</p>
    </>
  );
}
