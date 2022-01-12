const { deleteBoardTasks } = require('./column.handler');
const { boards } = require('./store');

const getBoardsHandler = (req, reply) => {
  reply.send(boards);
};

const getBoardHandler = (req, reply) => {
  const { id } = req.params;

  const board = boards.filter((elem) => elem.id === id)[0];

  if (!boards) {
    return reply.status(404).send(new Error('Column not found'));
  }

  return reply.send(board);
};

const addBoardHandler = (req, reply) => {
  const { title, columns } = req.body;

  const id = boards.length + 1;

  boards.push({ id, title, columns });

  reply.send('Post added');
};

const updateBoardHandler = (req, reply) => {
  const { title, columns } = req.body;
  const { id } = req.params;

  const board = boards.filter((element) => element.id === id)[0];

  if (!board) {
    return reply.status(404).send(new Error("Column doesn't exist"));
  }

  // eslint-disable-next-line no-bitwise
  board.title |= title;
  // eslint-disable-next-line no-bitwise
  board.columns |= columns;

  return reply.send('Column updated');
};


const deleteBoardHandler = (req, reply) => {
  const { id } = req.params;

  const boardIndex = boards.findIndex((post) => post.id === id);


  if (boardIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  deleteBoardTasks(boards[boardIndex].id);

  boards.splice(boardIndex, 1);

  return reply.send('Column deleted');
};

module.exports = {
    getBoardsHandler,
    getBoardHandler,
    addBoardHandler,
    updateBoardHandler,
    deleteBoardHandler
};
