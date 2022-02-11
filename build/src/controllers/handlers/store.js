"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.boards = exports.columns = exports.tasks = void 0;
var tasks = [
    {
        id: 1,
        title: 'first title',
        order: 1,
        description: 'description 1',
        userId: 1,
        boardId: 1,
        columnId: 1,
    },
    {
        id: 2,
        title: 'second title',
        order: 2,
        description: 'description 2',
        userId: 2,
        boardId: 2,
        columnId: 2,
    },
];
exports.tasks = tasks;
var columns = [
    { id: 1, title: 'title column 1', order: 1 },
    { id: 2, title: 'title column 2', order: 2 },
];
exports.columns = columns;
var boards = [
    { id: 1, title: 'title board 1', columns: columns },
    { id: 2, title: 'title board 2', columns: columns },
];
exports.boards = boards;
var users = [
    { id: 1, name: 'first', login: 'login1', password: 'p@55word' },
    { id: 2, name: 'first', login: 'login1', password: 'p@55word' },
];
exports.users = users;
