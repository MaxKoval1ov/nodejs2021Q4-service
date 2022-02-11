"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskSchema = exports.updateTaskSchema = exports.addTaskSchema = exports.getTaskSchema = exports.getTasksSchema = void 0;
var task = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        order: { type: 'number' },
        decription: { type: 'string' },
        userId: { type: 'number' },
        boardId: { type: 'number' },
        columnId: { type: 'number' },
    },
};
var getTasksSchema = {
    response: {
        200: {
            type: 'array',
            items: task,
        },
    },
};
exports.getTasksSchema = getTasksSchema;
var getTaskSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: task,
    },
};
exports.getTaskSchema = getTaskSchema;
var addTaskSchema = {
    body: {
        type: 'object',
        required: [
            'title',
            'order',
            'description',
            'userId',
            'boardId',
            'columnId',
        ],
        properties: {
            title: { type: 'string' },
            order: { type: 'number' },
            decription: { type: 'string' },
            userId: { type: 'number' },
            boardId: { type: 'number' },
            columnId: { type: 'number' },
        },
    },
};
exports.addTaskSchema = addTaskSchema;
var updateTaskSchema = {
    body: {
        type: 'object',
        require: []
    },
    params: {
        id: { type: 'number' }
    },
    response: {
        200: { type: 'string' },
    }
};
exports.updateTaskSchema = updateTaskSchema;
var deleteTaskSchema = {
    params: {
        id: { type: 'number' }
    },
    response: {
        200: { type: 'string' }
    }
};
exports.deleteTaskSchema = deleteTaskSchema;
