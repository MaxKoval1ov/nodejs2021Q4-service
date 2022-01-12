const user = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    login: { type: 'string' },
    // password: { type: 'string' },
  },
};

const getUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: user,
    },
  },
};

const getUserSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: user,
  },
};

const addUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'login', 'password'],
    properties: {
      name: { type: 'string' },
      login: { type: 'string' },
      password: { type: 'string' },
    },
  },
};

const updateUserSchema = {
  body: {
    type: 'object',
    require: [],
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: { type: 'string' },
  },
};

const deleteUserSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: { type: 'string' },
  },
};

module.exports = {
  getUsersSchema,
  getUserSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema,
};
