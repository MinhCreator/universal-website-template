import fp from 'fastify-plugin';
import sensible from '@fastify/sensible';

export default fp(async function (fastify) {
  await fastify.register(sensible);
});
