import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

export default fp(async function (fastify) {
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        description: 'Fastify API documentation',
        version: '1.0.0',
      },
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
  });
});
