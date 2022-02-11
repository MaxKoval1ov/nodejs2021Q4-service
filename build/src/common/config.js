"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVEL_LOG = exports.AUTH_MODE = exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = void 0;
var dotenv = require('dotenv');
var path = require('path');
dotenv.config({
    path: path.join(__dirname, '../../.env')
});
var PORT = process.env.PORT || 4000;
exports.PORT = PORT;
var NODE_ENV = process.env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
var MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
exports.MONGO_CONNECTION_STRING = MONGO_CONNECTION_STRING;
var JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
var AUTH_MODE = process.env.AUTH_MODE === 'true';
exports.AUTH_MODE = AUTH_MODE;
var LEVEL_LOG = process.env.LEVEL_LOG || '4';
exports.LEVEL_LOG = LEVEL_LOG;
