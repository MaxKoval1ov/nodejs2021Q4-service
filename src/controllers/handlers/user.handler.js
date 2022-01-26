const { users } = require('./store');
const { deleteUserTasks } = require('./task.handler');

const getUsersHandler = (req, reply) => {
  reply.send(users);
};

const getUserHandler = (req, reply) => {
  const { id } = req.params;

  const user = users.filter((elem) => elem.id === id)[0];

  if (!user) {
    return reply.status(404).send(new Error('User not found'));
  }
    return reply.header('Content-Type', 'application/json; charset=utf-8').send(user);
};

const addUserHandler = (req, reply) => {
  const { name, login, password } = req.body;

  const id = users.length + 1;

  users.push({ id, name, login, password });

  reply.send({message:'User has been added'});
};

const updateUserHandler = (req, reply) => {
  const { name, login, password } = req.body;
  const { id } = req.params;

  const user = users.filter((element) => element.id === id)[0];

  if (!user) {
    return reply.status(404).send(new Error("Column doesn't exist"));
  }

  user.name ||= name;
  user.login ||= login;
  user.password ||= password;


  return reply.send('User updated');
};


const deleteUserHandler = (req, reply) => {
  const { id } = req.params;

  const userIndex = users.findIndex((post) => post.id === id);


  if (userIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  deleteUserTasks(users[userIndex].id);

  users.splice(userIndex, 1);

  return reply.send('User deleted');
};

module.exports = {
    getUsersHandler,
    getUserHandler,
    addUserHandler,
    updateUserHandler,
    deleteUserHandler
};
