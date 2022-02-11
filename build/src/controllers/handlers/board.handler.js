"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoardHandler = exports.updateBoardHandler = exports.addBoardHandler = exports.getBoardHandler = exports.getBoardsHandler = void 0;
var deleteBoardTasks = require('./column.handler').deleteBoardTasks;
var boards = require('./store').boards;
var getBoardsHandler = function (req, reply) {
    reply.send(boards);
};
exports.getBoardsHandler = getBoardsHandler;
var getBoardHandler = function (req, reply) {
    var id = req.params.id;
    var board = boards.filter(function (elem) { return elem.id === id; })[0];
    if (!boards) {
        return reply.status(404).send(new Error('Column not found'));
    }
    return reply.send(board);
};
exports.getBoardHandler = getBoardHandler;
var addBoardHandler = function (req, reply) {
    var _a = req.body, title = _a.title, columns = _a.columns;
    var id = boards.length + 1;
    boards.push({ id: id, title: title, columns: columns });
    reply.send('Post added');
};
exports.addBoardHandler = addBoardHandler;
var updateBoardHandler = function (req, reply) {
    var _a = req.body, title = _a.title, columns = _a.columns;
    var id = req.params.id;
    var board = boards.filter(function (element) { return element.id === id; })[0];
    if (!board) {
        return reply.status(404).send(new Error("Column doesn't exist"));
    }
    // eslint-disable-next-line no-bitwise
    board.title |= title;
    // eslint-disable-next-line no-bitwise
    board.columns |= columns;
    return reply.send('Column updated');
};
exports.updateBoardHandler = updateBoardHandler;
var deleteBoardHandler = function (req, reply) {
    var id = req.params.id;
    var boardIndex = boards.findIndex(function (post) { return post.id === id; });
    if (boardIndex === -1) {
        return reply.status(404).send(new Error("Post doesn't exist"));
    }
    deleteBoardTasks(boards[boardIndex].id);
    boards.splice(boardIndex, 1);
    return reply.send('Column deleted');
};
exports.deleteBoardHandler = deleteBoardHandler;
