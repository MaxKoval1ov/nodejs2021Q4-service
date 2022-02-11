"use strict";
var _a = require('../schemas/board.schemas'), getBoardsSchema = _a.getBoardsSchema, getBoardSchema = _a.getBoardSchema, addBoardSchema = _a.addBoardSchema, updateBoardSchema = _a.updateBoardSchema, deleteBoardSchema = _a.deleteBoardSchema;
var _b = require('../handlers/board.handler'), getBoardsHandler = _b.getBoardsHandler, getBoardHandler = _b.getBoardHandler, addBoardHandler = _b.addBoardHandler, updateBoardHandler = _b.updateBoardHandler, deleteBoardHandler = _b.deleteBoardHandler;
var getBoardsOpts = {
    schema: getBoardsSchema,
    handler: getBoardsHandler,
};
var getBoardOpts = {
    schema: getBoardSchema,
    handler: getBoardHandler,
};
var addBoardOpts = {
    schema: addBoardSchema,
    handler: addBoardHandler,
};
var updateBoardOpts = {
    schema: updateBoardSchema,
    handler: updateBoardHandler,
};
var deleteBoardOpts = {
    schema: deleteBoardSchema,
    handler: deleteBoardHandler,
};
var columnsRoutes = function (fastify, opts, done) {
    fastify.get('/boards', getBoardsOpts);
    fastify.get('/boards/:id', getBoardOpts);
    fastify.post('/boards', addBoardOpts);
    fastify.put('/boards/:id', updateBoardOpts);
    fastify.delete('/boards/:id', deleteBoardOpts);
    done();
};
module.exports = columnsRoutes;
