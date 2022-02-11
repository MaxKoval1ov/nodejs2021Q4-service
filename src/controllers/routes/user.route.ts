const {
    getUsersSchema,
    getUserSchema,
    addUserSchema,
    updateUserSchema,
    deleteUserSchema
} = require('../schemas/user.schemas');

const {
    getUsersHandler,
    getUserHandler,
    addUserHandler,
    updateUserHandler,
    deleteUserHandler
  } = require('../handlers/user.handler')

const getUsersOpts = {
    schema: getUsersSchema,
    handler: getUsersHandler,
  };
  
  const getUserOpts = {
    schema: getUserSchema,
    handler: getUserHandler,
  };
  
  const addUserOpts = {
    schema: addUserSchema,
    handler: addUserHandler,
  };
  
  const updateUserOpts = {
    schema: updateUserSchema,
    handler: updateUserHandler,
  };
  
  const deleteUserOpts = {
    schema: deleteUserSchema,
    handler: deleteUserHandler,
  };
  
  export const userRoutes = (fastify, opts, done) => {
    fastify.get('/users', getUsersOpts);
  
    fastify.get('/users/:id', getUserOpts);
  
    fastify.post('/users', addUserOpts);
  
    fastify.put('/users/:id', updateUserOpts);
  
    fastify.delete('/users/:id', deleteUserOpts);
  
    done();
  };
  
