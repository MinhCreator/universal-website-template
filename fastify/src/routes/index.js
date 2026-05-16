export default async function (fastify) {
  fastify.get('/', async function (request, reply) {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });
}
