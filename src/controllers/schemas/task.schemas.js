const task = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    order: { type: 'number' },
    decription: { type: 'string' },
    userId: { type: 'number' },
    boardId: { type: 'number' },
    columnId: { type: 'number' },
  },
};

const getTasksSchema = {
  response: {
    200: {
      type: 'array',
      items: task,
    },
  },
};

const getTaskSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: task,
  },
};

const addTaskSchema = {
  body: {
    type: 'object',
    required: [
      'title',
      'order',
      'description',
      'userId',
      'boardId',
      'columnId',
    ],
    properties: {
      title: { type: 'string' },
      order: { type: 'number' },
      decription: { type: 'string' },
      userId: { type: 'number' },
      boardId: { type: 'number' },
      columnId: { type: 'number' },
    },
  },
};

const updateTaskSchema = {
    body: {
        type: 'object',
        require: []
    },
    params:{
        id: {type: 'number'}
    },
    response: {
        200: {type: 'string'},
    }
}

const deleteTaskSchema = {
    params: {
        id: { type:'number' }
    },
    response: {
        200: { type: 'string' }
    }
}

module.exports = {
    getTasksSchema,
    getTaskSchema,
    addTaskSchema,
    updateTaskSchema,
    deleteTaskSchema
}