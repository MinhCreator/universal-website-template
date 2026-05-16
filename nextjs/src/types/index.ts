export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends AuthCredentials {
  name: string;
  confirmPassword: string;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: string;
}

export interface Theme {
  mode: "light" | "dark" | "system";
}

export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export type RequestStatus = "idle" | "loading" | "success" | "error";

export interface AsyncState<T> {
  data: T | null;
  status: RequestStatus;
  error: string | null;
}
