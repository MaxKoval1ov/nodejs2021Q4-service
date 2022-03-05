import {  FastifyPluginAsync } from 'fastify';

import {
  getAllTasksSchema,
  getTaskSchema,
  addTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
} from './task.schemas'

import{
  getAllTasksRoute,
  getTaskRouter,
  addTaskRouter,
  updateTaskRouter,
  deleteTaskRouter
} from './task.handler'


const getTasksOpts = {
    schema: getAllTasksSchema,
    handler: getAllTasksRoute,
  };
  
  const getTaskOpts = {
    schema: getTaskSchema,
    handler: getTaskRouter,
  };
  
  const addTaskOpts = {
    schema: addTaskSchema,
    handler: addTaskRouter,
  };
  
  const updateTaskOpts = {
    schema: updateTaskSchema,
    handler: updateTaskRouter,
  };
  
  const deleteTaskOpts = {
    schema: deleteTaskSchema,
    handler: deleteTaskRouter,
  };
  
   const tasksRoutes:FastifyPluginAsync = async (app) => {
    app.get('/tasks', getTasksOpts);
  
    app.get('/tasks/:id', getTaskOpts);
  
    app.post('/tasks', addTaskOpts);
  
    app.put('/tasks/:id', updateTaskOpts);
  
    app.delete('/tasks/:id', deleteTaskOpts);
  
  };

  export default tasksRoutes;
  
