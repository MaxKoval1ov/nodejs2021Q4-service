"use strict";
module.exports = {
    users: {
        getAll: '/users',
        getById: function (id) { return "/users/".concat(id); },
        create: '/users',
        update: function (id) { return "/users/".concat(id); },
        delete: function (id) { return "/users/".concat(id); }
    },
    tasks: {
        getAll: function (boardId) { return "/boards/".concat(boardId, "/tasks"); },
        getById: function (boardId, taskId) { return "/boards/".concat(boardId, "/tasks/").concat(taskId); },
        create: function (boardId) { return "/boards/".concat(boardId, "/tasks"); },
        update: function (boardId, taskId) { return "/boards/".concat(boardId, "/tasks/").concat(taskId); },
        delete: function (boardId, taskId) { return "/boards/".concat(boardId, "/tasks/").concat(taskId); }
    },
    boards: {
        getAll: '/boards',
        getById: function (id) { return "/boards/".concat(id); },
        create: '/boards',
        update: function (id) { return "/boards/".concat(id); },
        delete: function (id) { return "/boards/".concat(id); }
    },
    login: '/login'
};
