const {
    getTasksSchema,
    getTaskSchema,
    addTaskSchema,
    updateTaskSchema,
    deleteTaskSchema
} = require('../schemas/task.schema');

const {
    getTasksHandler,
    getTaskHandler,
    addTaskHandler,
    updateTaskHandler,
    deleteTaskHandler
  } = require('../handlers/task.handler')

const getTasksOpts = {
    schema: getTasksSchema,
    handler: getTasksHandler,
  };
  
  const getTaskOpts = {
    schema: getTaskSchema,
    handler: getTaskHandler,
  };
  
  const addTaskOpts = {
    schema: addTaskSchema,
    handler: addTaskHandler,
  };
  
  const updateTaskOpts = {
    schema: updateTaskSchema,
    handler: updateTaskHandler,
  };
  
  const deleteTaskOpts = {
    schema: deleteTaskSchema,
    handler: deleteTaskHandler,
  };
  
  const tasksRoutes = (fastify, opts, done) => {
    fastify.get('/tasks', getTasksOpts);
  
    fastify.get('/tasks/:id', getTaskOpts);
  
    fastify.post('/tasks', addTaskOpts);
  
    fastify.put('/tasks/:id', updateTaskOpts);
  
    fastify.delete('/tasks/:id', deleteTaskOpts);
  
    done();
  };
  
  module.exports = tasksRoutes;