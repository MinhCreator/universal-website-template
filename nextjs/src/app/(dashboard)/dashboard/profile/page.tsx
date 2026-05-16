import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-secondary-900">Profile</h1>
      <p className="mt-2 text-secondary-600">View and edit your profile information.</p>
    </>
  );
}
