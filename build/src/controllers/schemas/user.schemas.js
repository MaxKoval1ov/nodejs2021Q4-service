"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = exports.updateUserSchema = exports.addUserSchema = exports.getUserSchema = exports.getUsersSchema = void 0;
var user = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        login: { type: 'string' },
        // password: { type: 'string' },
    },
};
var getUsersSchema = {
    response: {
        200: {
            type: 'array',
            items: user,
        },
    },
};
exports.getUsersSchema = getUsersSchema;
var getUserSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: user,
    },
};
exports.getUserSchema = getUserSchema;
var addUserSchema = {
    body: {
        type: 'object',
        required: ['name', 'login', 'password'],
        properties: {
            name: { type: 'string' },
            login: { type: 'string' },
            password: { type: 'string' },
        },
    },
};
exports.addUserSchema = addUserSchema;
var updateUserSchema = {
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
exports.updateUserSchema = updateUserSchema;
var deleteUserSchema = {
    params: {
        id: { type: 'number' },
    },
    response: {
        200: { type: 'string' },
    },
};
exports.deleteUserSchema = deleteUserSchema;
