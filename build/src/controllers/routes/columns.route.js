"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnsRoutes = void 0;
var _a = require('../schemas/columns.schemas'), getColumnsSchema = _a.getColumnsSchema, getColumnSchema = _a.getColumnSchema, addColumnSchema = _a.addColumnSchema, updateColumnSchema = _a.updateColumnSchema, deleteColumnSchema = _a.deleteColumnSchema;
var _b = require('../handlers/column.handler'), getColumnsHandler = _b.getColumnsHandler, getColumnHandler = _b.getColumnHandler, addColumnHandler = _b.addColumnHandler, updateColumnHandler = _b.updateColumnHandler, deleteColumnHandler = _b.deleteColumnHandler;
var getColumnsOpts = {
    schema: getColumnsSchema,
    handler: getColumnsHandler,
};
var getColumnOpts = {
    schema: getColumnSchema,
    handler: getColumnHandler,
};
var addColumnOpts = {
    schema: addColumnSchema,
    handler: addColumnHandler,
};
var updateColumnOpts = {
    schema: updateColumnSchema,
    handler: updateColumnHandler,
};
var deleteColumnOpts = {
    schema: deleteColumnSchema,
    handler: deleteColumnHandler,
};
var columnsRoutes = function (fastify, opts, done) {
    fastify.get('/columns', getColumnsOpts);
    fastify.get('/columns/:id', getColumnOpts);
    fastify.post('/columns', addColumnOpts);
    fastify.put('/columns/:id', updateColumnOpts);
    fastify.delete('/columns/:id', deleteColumnOpts);
    done();
};
exports.columnsRoutes = columnsRoutes;
