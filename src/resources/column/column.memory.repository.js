const data = [];

const getAll = async () => data;

const createDB = async (board) => data.push(board);

const updateBoardDB = async (id, body) => {
  const index = data.findIndex((p) => p.id === id);
  data[index] = body;
};

const deleteBoardBD = async (board) => {
  const index = data.findIndex((p) => p.id === board.id);
  await data.splice(index, 1);
};

module.exports = { getAll, createDB, updateBoardDB, deleteBoardBD };