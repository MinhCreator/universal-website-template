import 'dotenv/config';

export function loadConfig() {
  return {
    PORT: parseInt(process.env.PORT, 10) || 3000,
    HOST: process.env.HOST || '0.0.0.0',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  };
}
