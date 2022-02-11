const {
    getColumnsSchema,
    getColumnSchema,
    addColumnSchema,
    updateColumnSchema,
    deleteColumnSchema
} = require('../schemas/columns.schemas');

const {
    getColumnsHandler,
    getColumnHandler,
    addColumnHandler,
    updateColumnHandler,
    deleteColumnHandler
  } = require('../handlers/column.handler')

const getColumnsOpts = {
    schema: getColumnsSchema,
    handler: getColumnsHandler,
  };
  
  const getColumnOpts = {
    schema: getColumnSchema,
    handler: getColumnHandler,
  };
  
  const addColumnOpts = {
    schema: addColumnSchema,
    handler: addColumnHandler,
  };
  
  const updateColumnOpts = {
    schema: updateColumnSchema,
    handler: updateColumnHandler,
  };
  
  const deleteColumnOpts = {
    schema: deleteColumnSchema,
    handler: deleteColumnHandler,
  };
  
  export const columnsRoutes = (fastify, opts, done) => {
    fastify.get('/columns', getColumnsOpts);
  
    fastify.get('/columns/:id', getColumnOpts);
  
    fastify.post('/columns', addColumnOpts);
  
    fastify.put('/columns/:id', updateColumnOpts);
  
    fastify.delete('/columns/:id', deleteColumnOpts);
  
    done();
  };
  
