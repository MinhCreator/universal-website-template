"use client";

import { AuthProvider } from "@/stores/auth-store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
