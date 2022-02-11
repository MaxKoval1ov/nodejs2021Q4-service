"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.column = exports.deleteBoardSchema = exports.updateBoardSchema = exports.addBoardSchema = exports.getBoardSchema = exports.getBoardsSchema = void 0;
var column = require('./columns.schemas').column;
exports.column = column;
var board = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        columns: { type: 'array', items: column },
    },
};
var getBoardsSchema = {
    response: {
        200: {
            type: 'array',
            items: board,
        },
    },
};
exports.getBoardsSchema = getBoardsSchema;
var getBoardSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: board,
    },
};
exports.getBoardSchema = getBoardSchema;
var addBoardSchema = {
    body: {
        type: 'object',
        required: ['title'],
        properties: {
            title: { type: 'string' },
            column: { type: 'array', items: column },
        },
    },
};
exports.addBoardSchema = addBoardSchema;
var updateBoardSchema = {
    body: {
        type: 'object',
        require: [],
    },
    params: {
        id: { type: 'number' },
    },
    response: {
        200: { type: 'string' },
    },
};
exports.updateBoardSchema = updateBoardSchema;
var deleteBoardSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: { type: 'string' },
    },
};
exports.deleteBoardSchema = deleteBoardSchema;
