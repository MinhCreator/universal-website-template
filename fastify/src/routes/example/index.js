import { echoSchema } from './schemas.js';

export default async function (fastify) {
  fastify.get('/hello', async function (request, reply) {
    return { message: fastify.support.greet('World') };
  });

  fastify.post('/echo', { schema: echoSchema }, async function (request, reply) {
    return { echo: request.body };
  });
}
