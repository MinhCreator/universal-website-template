import { buildApp } from './app.js';

async function start() {
  const app = await buildApp();

  try {
    await app.listen({ port: app.config.PORT, host: app.config.HOST });
    app.log.info(`Server running at http://${app.config.HOST}:${app.config.PORT}`);
  } catch (err) {
    app.log.fatal(err);
    process.exit(1);
  }
}

start();
