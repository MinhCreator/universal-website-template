import fp from 'fastify-plugin';

export default fp(async function (fastify) {
  fastify.decorate('support', {
    greet(name) {
      return `Hello, ${name}!`;
    },
  });
});
