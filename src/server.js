const fastify = require('fastify')({
  logger: true
});

const PORT = process.env.PORT || 5000;


fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'fastify-api',
    }
  }
});

fastify.register(require('./controllers/routes/task.route'));
fastify.register(require('./controllers/routes/columns.route'));
fastify.register(require('./controllers/routes/boards.route'));
fastify.register(require('./controllers/routes/user.route'));

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();