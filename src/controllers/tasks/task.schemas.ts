const task = {
  type: 'object',
  required: ['title', 'order', 'description', 'userId', 'boardId'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    decription: { type: 'string' },
    userId: { type: ['number', 'null'] },
    boardId: { type: ['number', 'null'] },
    columnId: { type: ['number', 'null'] },
  },
};

const getAllTasksSchema = {
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
  response: {
    201: task,
  },
};

const updateTaskSchema = {
  body: task,
  params: {
    id: { type: 'number' },
  },
  response: {
    200: task,
  },
};

const deleteTaskSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    204: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

export {
  getAllTasksSchema,
  getTaskSchema,
  addTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
};
