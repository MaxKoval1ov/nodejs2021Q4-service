const { columns, tasks } = require('./store');
const { deleteColumnTasks, deleteTask } = require('./task.handler');

const getColumnsHandler = (req, reply) => {
  reply.send(columns);
};

const getColumnHandler = (req, reply) => {
  const { id } = req.params;

  const column = columns.filter((elem) => elem.id === id)[0];

  if (!column) {
    return reply.status(404).send(new Error('Column not found'));
  }

  return reply.send(column);
};

const addColumnHandler = (req, reply) => {
  const { title, order } = req.body;

  const id = columns.length + 1;

  columns.push({ id, title, order });

  reply.send('Post added');
};

const updateColumnHandler = (req, reply) => {
  const { title, order } = req.body;
  const { id } = req.params;

  const column = columns.filter((element) => element.id === id)[0];

  if (!column) {
    return reply.status(404).send(new Error("Column doesn't exist"));
  }

  // eslint-disable-next-line no-bitwise
  column.title |= title;
  // eslint-disable-next-line no-bitwise
  column.order |= order;

  return reply.send('Column updated');
};

const deleteColumn = (id) => {
  const columnIndex = columns.findIndex((post) => post.id === id);
  if(!columnIndex === -1)
    return false;
  const tempColumn = columns.splice(columnIndex, 1)[0];
  return   tempColumn;
};

const deleteColumnHandler = (req, reply) => {
  const { id } = req.params;

  const tmpColumn = deleteColumn(id);

  if (!tmpColumn) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  deleteColumnTasks(tmpColumn.id);
  
  return reply.send('Column deleted');
};

const deleteBoardTasks = (id) => {
  const boardTasks =  tasks.filter((task) => task.boardId === id);
  if (boardTasks.length) boardTasks.forEach((task) => deleteTask(task.id));
}

module.exports = {
  getColumnsHandler,
  getColumnHandler,
  addColumnHandler,
  updateColumnHandler,
  deleteColumnHandler,
  deleteBoardTasks
};
