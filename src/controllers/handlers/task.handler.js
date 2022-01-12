const { tasks } = require('./store');

const getTasksHandler = (req, reply) => {
  reply.send(tasks);
};

const getTaskHandler = (req, reply) => {
  const { id } = req.params;

  const task = tasks.filter((elem) => elem.id === id)[0];

  if (!task) {
    return reply.status(404).send(new Error('Task not found'));
  }

  return reply.send(task);
};

const addTaskHandler = (req, reply) => {
  const { title, order, description, userId, boardId, columnId } = req.body;

  const id = tasks.length + 1;

  tasks.push({ id, title, order, description, userId, boardId, columnId });

  reply.send('Post added');
};

const updateTaskHandler = (req, reply) => {
  const { title, order, description, userId, boardId, columnId } = req.body;
  const { id } = req.params;

  const task = tasks.filter((element) => element.id === id)[0];

  if (!task) {
    return reply.status(404).send(new Error("Task doesn't exist"));
  }

  task.title ||= title;
  task.order ||= order;
  task.description ||= description;
  task.userId ||= userId;
  task.boardId ||= boardId;
  task.columnId ||= columnId;

  return reply.send('Task updated');
};

const deleteTaskHandler = (req, reply) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((post) => post.id === id);

  if (taskIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  tasks.splice(taskIndex, 1);

  return reply.send('Task deleted');
};

module.exports = {
  getTasksHandler,
  getTaskHandler,
  addTaskHandler,
  updateTaskHandler,
  deleteTaskHandler
}
