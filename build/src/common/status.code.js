"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode;
(function (statusCode) {
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["CREATED"] = 201] = "CREATED";
    statusCode[statusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    statusCode[statusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    statusCode[statusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    statusCode[statusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(statusCode || (statusCode = {}));
exports.default = statusCode;
