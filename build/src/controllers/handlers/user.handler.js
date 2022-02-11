"use strict";
var users = require('./store').users;
var deleteUserTasks = require('./task.handler').deleteUserTasks;
var getUsersHandler = function (req, reply) {
    reply.send(users);
};
var getUserHandler = function (req, reply) {
    var id = req.params.id;
    var user = users.filter(function (elem) { return elem.id === id; })[0];
    if (!user) {
        return reply.status(404).send(new Error('User not found'));
    }
    return reply.header('Content-Type', 'application/json; charset=utf-8').send(user);
};
var addUserHandler = function (req, reply) {
    var _a = req.body, name = _a.name, login = _a.login, password = _a.password;
    var id = users.length + 1;
    users.push({ id: id, name: name, login: login, password: password });
    reply.send({ message: 'User has been added' });
};
var updateUserHandler = function (req, reply) {
    var _a = req.body, name = _a.name, login = _a.login, password = _a.password;
    var id = req.params.id;
    var user = users.filter(function (element) { return element.id === id; })[0];
    if (!user) {
        return reply.status(404).send(new Error("Column doesn't exist"));
    }
    user.name || (user.name = name);
    user.login || (user.login = login);
    user.password || (user.password = password);
    return reply.send('User updated');
};
var deleteUserHandler = function (req, reply) {
    var id = req.params.id;
    var userIndex = users.findIndex(function (post) { return post.id === id; });
    if (userIndex === -1) {
        return reply.status(404).send(new Error("Post doesn't exist"));
    }
    deleteUserTasks(users[userIndex].id);
    users.splice(userIndex, 1);
    return reply.send('User deleted');
};
module.exports = {
    getUsersHandler: getUsersHandler,
    getUserHandler: getUserHandler,
    addUserHandler: addUserHandler,
    updateUserHandler: updateUserHandler,
    deleteUserHandler: deleteUserHandler
};
