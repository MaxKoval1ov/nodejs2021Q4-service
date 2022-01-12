const {
    getBoardsSchema,
    getBoardSchema,
    addBoardSchema,
    updateBoardSchema,
    deleteBoardSchema
} = require('../schemas/board.schemas');

const {
    getBoardsHandler,
    getBoardHandler,
    addBoardHandler,
    updateBoardHandler,
    deleteBoardHandler
  } = require('../handlers/board.handler')

const getBoardsOpts = {
    schema: getBoardsSchema,
    handler: getBoardsHandler,
  };
  
  const getBoardOpts = {
    schema: getBoardSchema,
    handler: getBoardHandler,
  };
  
  const addBoardOpts = {
    schema: addBoardSchema,
    handler: addBoardHandler,
  };
  
  const updateBoardOpts = {
    schema: updateBoardSchema,
    handler: updateBoardHandler,
  };
  
  const deleteBoardOpts = {
    schema: deleteBoardSchema,
    handler: deleteBoardHandler,
  };
  
  const columnsRoutes = (fastify, opts, done) => {
    fastify.get('/boards', getBoardsOpts);
  
    fastify.get('/boards/:id', getBoardOpts);
  
    fastify.post('/boards', addBoardOpts);
  
    fastify.put('/boards/:id', updateBoardOpts);
  
    fastify.delete('/boards/:id', deleteBoardOpts);
  
    done();
  };
  
  module.exports = columnsRoutes;