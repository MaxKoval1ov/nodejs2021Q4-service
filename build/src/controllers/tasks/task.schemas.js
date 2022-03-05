"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskSchema = exports.updateTaskSchema = exports.addTaskSchema = exports.getTaskSchema = exports.getAllTasksSchema = void 0;
var task = {
    type: 'object',
    required: ['title', 'order', 'description', 'userId', 'boardId'],
    properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        order: { type: 'number' },
        decription: { type: 'string' },
        userId: { type: ['number', 'null'] },
        boardId: { type: ['number', 'null'] },
        columnId: { type: ['number', 'null'] },
    },
};
var getAllTasksSchema = {
    response: {
        200: {
            type: 'array',
            items: task,
        },
    },
};
exports.getAllTasksSchema = getAllTasksSchema;
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
    response: {
        201: task,
    },
};
exports.addTaskSchema = addTaskSchema;
var updateTaskSchema = {
    body: task,
    params: {
        id: { type: 'number' },
    },
    response: {
        200: task,
    },
};
exports.updateTaskSchema = updateTaskSchema;
var deleteTaskSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        204: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    },
};
exports.deleteTaskSchema = deleteTaskSchema;
