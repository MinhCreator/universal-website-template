const requiredEnvVars = ["NEXT_PUBLIC_APP_URL"] as const;

export function validateEnv() {
  for (const key of requiredEnvVars) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
}

export function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (!value) {
    throw new Error(`Environment variable ${key} is not set and no fallback provided`);
  }
  return value;
}
