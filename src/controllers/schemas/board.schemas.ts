const { column } = require('./columns.schemas');

const board = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    columns: { type: 'array', items: column },
  },
};

const getBoardsSchema = {
  response: {
    200: {
      type: 'array',
      items: board,
    },
  },
};

const getBoardSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: board,
  },
};

const addBoardSchema = {
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' },
      column: { type: 'array', items: column },
    },
  },
};

const updateBoardSchema = {
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

const deleteBoardSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: { type: 'string' },
  },
};

export {
  getBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  updateBoardSchema,
  deleteBoardSchema,
  column,
};
