import { userSchema, userIdSchema } from './schemas.js';

const users = [];

export default async function (fastify) {
  fastify.post('/', { schema: userSchema }, async function (request, reply) {
    const user = { id: users.length + 1, ...request.body };
    users.push(user);
    return reply.code(201).send(user);
  });

  fastify.get('/', async function (request, reply) {
    return users;
  });

  fastify.get('/:id', { schema: userIdSchema }, async function (request, reply) {
    const user = users.find((u) => u.id === Number(request.params.id));
    if (!user) {
      return reply.notFound('User not found');
    }
    return user;
  });
}
