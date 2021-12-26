let data = [];

const getAll = async () => data;

const createDB = async (task) => data.push(task);

const updateTaskDB = async (id, body) => {
  const index = data.findIndex((p) => p.id === id);
  data[index] = body;
};

const deleteTaskBD = async (task) => {
  const index = data.findIndex((p) => p.id === task.id);
  await data.splice(index, 1);
};

const updateTaskIdUserDELETEDB = async (updatedTask) => {
  data = updatedTask;
};

const deleteTaskIdBoardBD = async (updatedTask) => {
  data = updatedTask;
};

module.exports = {
  getAll,
  createDB,
  deleteTaskBD,
  updateTaskDB,
  updateTaskIdUserDELETEDB,
  deleteTaskIdBoardBD,
};