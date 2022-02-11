"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardTasks = exports.deleteColumnHandler = exports.updateColumnHandler = exports.addColumnHandler = exports.getColumnHandler = exports.getColumnsHandler = void 0;
var _a = require('./store'), columns = _a.columns, tasks = _a.tasks;
var _b = require('./task.handler'), deleteColumnTasks = _b.deleteColumnTasks, deleteTask = _b.deleteTask;
var getColumnsHandler = function (req, reply) {
    reply.send(columns);
};
exports.getColumnsHandler = getColumnsHandler;
var getColumnHandler = function (req, reply) {
    var id = req.params.id;
    var column = columns.filter(function (elem) { return elem.id === id; })[0];
    if (!column) {
        return reply.status(404).send(new Error('Column not found'));
    }
    return reply.send(column);
};
exports.getColumnHandler = getColumnHandler;
var addColumnHandler = function (req, reply) {
    var _a = req.body, title = _a.title, order = _a.order;
    var id = columns.length + 1;
    columns.push({ id: id, title: title, order: order });
    reply.send('Post added');
};
exports.addColumnHandler = addColumnHandler;
var updateColumnHandler = function (req, reply) {
    var _a = req.body, title = _a.title, order = _a.order;
    var id = req.params.id;
    var column = columns.filter(function (element) { return element.id === id; })[0];
    if (!column) {
        return reply.status(404).send(new Error("Column doesn't exist"));
    }
    // eslint-disable-next-line no-bitwise
    column.title |= title;
    // eslint-disable-next-line no-bitwise
    column.order |= order;
    return reply.send('Column updated');
};
exports.updateColumnHandler = updateColumnHandler;
var deleteColumn = function (id) {
    var columnIndex = columns.findIndex(function (post) { return post.id === id; });
    if (columnIndex === -1)
        return false;
    var tempColumn = columns.splice(columnIndex, 1)[0];
    return tempColumn;
};
var deleteColumnHandler = function (req, reply) {
    var id = req.params.id;
    var tmpColumn = deleteColumn(id);
    if (!tmpColumn) {
        return reply.status(404).send(new Error("Post doesn't exist"));
    }
    deleteColumnTasks(tmpColumn.id);
    return reply.send('Column deleted');
};
exports.deleteColumnHandler = deleteColumnHandler;
var deleteBoardTasks = function (id) {
    var boardTasks = tasks.filter(function (task) { return task.boardId === id; });
    if (boardTasks.length)
        boardTasks.forEach(function (task) { return deleteTask(task.id); });
};
exports.deleteBoardTasks = deleteBoardTasks;
