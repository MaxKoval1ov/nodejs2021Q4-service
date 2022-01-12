const { columns } = require('./store');
let {  tasks } = require('./store');

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

const deleteColumnHandler = (req, reply) => {
  const { id } = req.params;

  const columnIndex = columns.findIndex((post) => post.id === id);

  if (columnIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  columns.splice(columnIndex, 1);

  tasks = tasks.filter((el) => el.columnId !== columnIndex);

  return reply.send('Column deleted');
};

module.exports = {
  getColumnsHandler,
  getColumnHandler,
  addColumnHandler,
  updateColumnHandler,
  deleteColumnHandler,
};
