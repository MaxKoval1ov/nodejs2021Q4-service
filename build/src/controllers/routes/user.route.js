"use strict";
var _a = require('../schemas/user.schemas'), getUsersSchema = _a.getUsersSchema, getUserSchema = _a.getUserSchema, addUserSchema = _a.addUserSchema, updateUserSchema = _a.updateUserSchema, deleteUserSchema = _a.deleteUserSchema;
var _b = require('../handlers/user.handler'), getUsersHandler = _b.getUsersHandler, getUserHandler = _b.getUserHandler, addUserHandler = _b.addUserHandler, updateUserHandler = _b.updateUserHandler, deleteUserHandler = _b.deleteUserHandler;
var getUsersOpts = {
    schema: getUsersSchema,
    handler: getUsersHandler,
};
var getUserOpts = {
    schema: getUserSchema,
    handler: getUserHandler,
};
var addUserOpts = {
    schema: addUserSchema,
    handler: addUserHandler,
};
var updateUserOpts = {
    schema: updateUserSchema,
    handler: updateUserHandler,
};
var deleteUserOpts = {
    schema: deleteUserSchema,
    handler: deleteUserHandler,
};
var userRoutes = function (fastify, opts, done) {
    fastify.get('/users', getUsersOpts);
    fastify.get('/users/:id', getUserOpts);
    fastify.post('/users', addUserOpts);
    fastify.put('/users/:id', updateUserOpts);
    fastify.delete('/users/:id', deleteUserOpts);
    done();
};
module.exports = userRoutes;
