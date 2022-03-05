import fastify, { FastifyInstance, FastifyRegisterOptions } from "fastify";
import fastifySwagger, { SwaggerOptions } from "fastify-swagger";
import tasksRoutes from "./controllers/tasks/task.route";

const app:FastifyInstance = fastify({
    logger:false,
})

const swaggerOpts:FastifyRegisterOptions<SwaggerOptions> = {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: {
        version: '4.15.0',
        title: 'fastify-api',
      }
    }
  };

  app.register(fastifySwagger,swaggerOpts);
  app.register(tasksRoutes);

export default app;
