import fp from 'fastify-plugin';
import cors from '@fastify/cors';

export default fp(async function (fastify) {
  await fastify.register(cors, {
    origin: true,
  });
});
