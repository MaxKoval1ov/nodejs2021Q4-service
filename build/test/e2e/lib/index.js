"use strict";
var supertest = require('supertest');
var debug = require('debug')('rs:lib');
var dotenv = require('dotenv');
var path = require('path');
dotenv.config({
    path: path.join(__dirname, '../../../.env')
});
var routes = require('./routes');
var host = process.env.HOST || process.env.PORT
    ? "localhost:".concat(process.env.PORT)
    : 'localhost:4000';
debug('HOST', host);
var request = supertest(host);
module.exports = {
    request: request,
    routes: routes
};
