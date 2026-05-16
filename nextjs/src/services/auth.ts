import { api } from "@/lib/api/client";

export interface AuthResponse {
  user: { id: string; name: string; email: string };
  token: string;
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/auth/login", { email, password });
}

export async function register(
  name: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  return api.post<AuthResponse>("/auth/register", { name, email, password });
}

export async function logout(): Promise<void> {
  return api.post("/auth/logout");
}
