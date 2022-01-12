const column = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    order: { type: 'number' },
  },
};

const getColumnsSchema = {
  response: {
    200: {
      type: 'array',
      items: column,
    },
  },
};

const getColumnSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: column,
  },
};

const addColumnSchema = {
  body: {
    type: 'object',
    required: [
      'title',
      'oreder',
    ],
    properties: {
      title: { type: 'string' },
      order: { type: 'number' },
    },
  },
};

const updateColumnSchema = {
    body: {
        type: 'object',
        require: []
    },
    params:{
        id: {type: 'number'},
    },
    response: {
        200: {type: 'string'},
    }
}

const deleteColumnSchema = {
    params: {
        id: { type:'number' }
    },
    response: {
        200: { type: 'string' }
    }
}

module.exports = {
    getColumnsSchema,
    getColumnSchema,
    addColumnSchema,
    updateColumnSchema,
    deleteColumnSchema,
    column
}