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

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((post) => post.id === id);
  if (taskIndex === -1) {
    return false;
  }
  tasks.splice(taskIndex, 1);
  return true;
};

const deleteColumnTasks = (id) => {
  const boardTasks = tasks.filter((task) => task.boardId === id);
  if (boardTasks.length) boardTasks.forEach((task) => deleteTask(task.id));
};

const deleteUserTasks = (id) => {
  const userTasks = tasks.filter((task) => task.boardId === id);
  if (userTasks.length)
    userTasks.forEach((task) => {
     if( task.userId === id) 
      // eslint-disable-next-line no-param-reassign
      task.userId = null;
    });
};

const deleteTaskHandler = (req, reply) => {
  const { id } = req.params;

  const res = deleteTask(id);

  if (!res) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  return reply.send('Task deleted');
};

module.exports = {
  getTasksHandler,
  getTaskHandler,
  addTaskHandler,
  updateTaskHandler,
  deleteTaskHandler,
  deleteColumnTasks,
  deleteTask,
  deleteUserTasks
};
