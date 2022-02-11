"use strict";
var tasks = require('./store').tasks;
var getTasksHandler = function (req, reply) {
    reply.send(tasks);
};
var getTaskHandler = function (req, reply) {
    var id = req.params.id;
    var task = tasks.filter(function (elem) { return elem.id === id; })[0];
    if (!task) {
        return reply.status(404).send(new Error('Task not found'));
    }
    return reply.send(task);
};
var addTaskHandler = function (req, reply) {
    var _a = req.body, title = _a.title, order = _a.order, description = _a.description, userId = _a.userId, boardId = _a.boardId, columnId = _a.columnId;
    var id = tasks.length + 1;
    tasks.push({ id: id, title: title, order: order, description: description, userId: userId, boardId: boardId, columnId: columnId });
    reply.send('Post added');
};
var updateTaskHandler = function (req, reply) {
    var _a = req.body, title = _a.title, order = _a.order, description = _a.description, userId = _a.userId, boardId = _a.boardId, columnId = _a.columnId;
    var id = req.params.id;
    var task = tasks.filter(function (element) { return element.id === id; })[0];
    if (!task) {
        return reply.status(404).send(new Error("Task doesn't exist"));
    }
    task.title || (task.title = title);
    task.order || (task.order = order);
    task.description || (task.description = description);
    task.userId || (task.userId = userId);
    task.boardId || (task.boardId = boardId);
    task.columnId || (task.columnId = columnId);
    return reply.send('Task updated');
};
var deleteTask = function (id) {
    var taskIndex = tasks.findIndex(function (post) { return post.id === id; });
    if (taskIndex === -1) {
        return false;
    }
    tasks.splice(taskIndex, 1);
    return true;
};
var deleteColumnTasks = function (id) {
    var boardTasks = tasks.filter(function (task) { return task.boardId === id; });
    if (boardTasks.length)
        boardTasks.forEach(function (task) { return deleteTask(task.id); });
};
var deleteUserTasks = function (id) {
    var userTasks = tasks.filter(function (task) { return task.boardId === id; });
    if (userTasks.length)
        userTasks.forEach(function (task) {
            if (task.userId === id)
                // eslint-disable-next-line no-param-reassign
                task.userId = null;
        });
};
var deleteTaskHandler = function (req, reply) {
    var id = req.params.id;
    var res = deleteTask(id);
    if (!res) {
        return reply.status(404).send(new Error("Post doesn't exist"));
    }
    return reply.send('Task deleted');
};
module.exports = {
    getTasksHandler: getTasksHandler,
    getTaskHandler: getTaskHandler,
    addTaskHandler: addTaskHandler,
    updateTaskHandler: updateTaskHandler,
    deleteTaskHandler: deleteTaskHandler,
    deleteColumnTasks: deleteColumnTasks,
    deleteTask: deleteTask,
    deleteUserTasks: deleteUserTasks
};
