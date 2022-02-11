"use strict";
var _a = require('../schemas/task.schemas'), getTasksSchema = _a.getTasksSchema, getTaskSchema = _a.getTaskSchema, addTaskSchema = _a.addTaskSchema, updateTaskSchema = _a.updateTaskSchema, deleteTaskSchema = _a.deleteTaskSchema;
var _b = require('../handlers/task.handler'), getTasksHandler = _b.getTasksHandler, getTaskHandler = _b.getTaskHandler, addTaskHandler = _b.addTaskHandler, updateTaskHandler = _b.updateTaskHandler, deleteTaskHandler = _b.deleteTaskHandler;
var getTasksOpts = {
    schema: getTasksSchema,
    handler: getTasksHandler,
};
var getTaskOpts = {
    schema: getTaskSchema,
    handler: getTaskHandler,
};
var addTaskOpts = {
    schema: addTaskSchema,
    handler: addTaskHandler,
};
var updateTaskOpts = {
    schema: updateTaskSchema,
    handler: updateTaskHandler,
};
var deleteTaskOpts = {
    schema: deleteTaskSchema,
    handler: deleteTaskHandler,
};
var tasksRoutes = function (fastify, opts, done) {
    fastify.get('/tasks', getTasksOpts);
    fastify.get('/tasks/:id', getTaskOpts);
    fastify.post('/tasks', addTaskOpts);
    fastify.put('/tasks/:id', updateTaskOpts);
    fastify.delete('/tasks/:id', deleteTaskOpts);
    done();
};
module.exports = tasksRoutes;
