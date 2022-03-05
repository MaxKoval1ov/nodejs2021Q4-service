"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var fastify_swagger_1 = __importDefault(require("fastify-swagger"));
var task_route_1 = __importDefault(require("./controllers/tasks/task.route"));
var app = (0, fastify_1.default)({
    logger: false,
});
var swaggerOpts = {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            version: '4.15.0',
            title: 'fastify-api',
        }
    }
};
app.register(fastify_swagger_1.default, swaggerOpts);
app.register(task_route_1.default);
exports.default = app;
