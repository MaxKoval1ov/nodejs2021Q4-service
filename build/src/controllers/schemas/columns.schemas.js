"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.column = exports.deleteColumnSchema = exports.updateColumnSchema = exports.addColumnSchema = exports.getColumnSchema = exports.getColumnsSchema = void 0;
var column = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        order: { type: 'number' },
    },
};
exports.column = column;
var getColumnsSchema = {
    response: {
        200: {
            type: 'array',
            items: column,
        },
    },
};
exports.getColumnsSchema = getColumnsSchema;
var getColumnSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: column,
    },
};
exports.getColumnSchema = getColumnSchema;
var addColumnSchema = {
    body: {
        type: 'object',
        required: [
            'title',
            'oreder',
        ],
        properties: {
            title: { type: 'string' },
            order: { type: 'number' },
        },
    },
};
exports.addColumnSchema = addColumnSchema;
var updateColumnSchema = {
    body: {
        type: 'object',
        require: []
    },
    params: {
        id: { type: 'number' },
    },
    response: {
        200: { type: 'string' },
    }
};
exports.updateColumnSchema = updateColumnSchema;
var deleteColumnSchema = {
    params: {
        id: { type: 'number' }
    },
    response: {
        200: { type: 'string' }
    }
};
exports.deleteColumnSchema = deleteColumnSchema;
