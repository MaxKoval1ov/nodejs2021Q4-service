"use strict";
var createAuthorizedRequest = require('./createAuthorizedRequest');
var shouldAuthorizationBeTested = require('./shouldAuthorizationBeTested');
module.exports = {
    createAuthorizedRequest: createAuthorizedRequest,
    shouldAuthorizationBeTested: shouldAuthorizationBeTested
};
