import Fastify from 'fastify';
import autoload from '@fastify/autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadConfig } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function buildApp(opts = {}) {
  const config = loadConfig();

  const app = Fastify({
    logger: {
      level: config.LOG_LEVEL || 'info',
    },
    ...opts,
  });

  app.decorate('config', config);

  await app.register(autoload, {
    dir: join(__dirname, 'plugins'),
  });

  await app.register(autoload, {
    dir: join(__dirname, 'routes'),
    options: { prefix: '/api' },
  });

  return app;
}
