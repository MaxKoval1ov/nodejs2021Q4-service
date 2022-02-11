"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a = require('../lib'), unauthorizedRequest = _a.request, routes = _a.routes;
var debug = require('debug')('rs:test:users');
var _b = require('../utils'), createAuthorizedRequest = _b.createAuthorizedRequest, shouldAuthorizationBeTested = _b.shouldAuthorizationBeTested;
var TEST_USER_DATA = {
    name: 'TEST_USER',
    login: 'test_user',
    password: 'T35t_P@55w0rd'
};
var TEST_BOARD_DATA = {
    title: 'Autotest board',
    columns: [
        { title: 'Backlog', order: 1 },
        { title: 'Sprint', order: 2 }
    ]
};
describe('Users suite', function () {
    var request = unauthorizedRequest;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!shouldAuthorizationBeTested) return [3 /*break*/, 2];
                    return [4 /*yield*/, createAuthorizedRequest(unauthorizedRequest)];
                case 1:
                    request = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
    describe('GET', function () {
        it('should get all users', function () { return __awaiter(void 0, void 0, void 0, function () {
            var usersResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get(routes.users.getAll)
                            .set('Accept', 'application/json')
                            .expect(200)
                            .expect('Content-Type', /json/)];
                    case 1:
                        usersResponse = _a.sent();
                        debug(usersResponse.body);
                        expect(usersResponse.status).to.equal(200);
                        expect(Array.isArray(usersResponse.body)).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should get a user by id', function () { return __awaiter(void 0, void 0, void 0, function () {
            var userId, userResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Create the user
                    return [4 /*yield*/, request
                            .post(routes.users.create)
                            .set('Accept', 'application/json')
                            .send(TEST_USER_DATA)
                            .expect(200)
                            .expect('Content-Type', /json/)
                            .then(function (res) {
                            expect(res.body.id).to.be.a('string');
                            userId = res.body.id;
                        })];
                    case 1:
                        // Create the user
                        _a.sent();
                        return [4 /*yield*/, request
                                .get(routes.users.getById(userId))
                                .set('Accept', 'application/json')
                                .expect(200)
                                .expect('Content-Type', /json/)];
                    case 2:
                        userResponse = _a.sent();
                        expect(userResponse.body).to.be.instanceOf(Object);
                        expect(userResponse.body.id).to.equal(userId);
                        // Clean up, delete the user we created
                        return [4 /*yield*/, request.delete(routes.users.delete(userId))];
                    case 3:
                        // Clean up, delete the user we created
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('POST', function () {
        it('should create user successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.users.create)
                            .set('Accept', 'application/json')
                            .send(TEST_USER_DATA)
                            .expect(201)
                            .expect('Content-Type', /json/)
                            .then(function (res) {
                            expect(res.body.id).to.be.a('string');
                            userId = res.body.id;
                            expect(res.body).to.not.have.property('password');
                            jestExpect(res.body).toMatchObject({
                                login: TEST_USER_DATA.login,
                                name: TEST_USER_DATA.name
                            });
                        })];
                    case 1:
                        _a.sent();
                        // Teardown
                        return [4 /*yield*/, request.delete(routes.users.delete(userId))];
                    case 2:
                        // Teardown
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('PUT', function () {
        it('should update user successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var userId, updatedUser, password, expectedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.users.create)
                            .set('Accept', 'application/json')
                            .send(TEST_USER_DATA)
                            .then(function (res) {
                            userId = res.body.id;
                        })];
                    case 1:
                        _a.sent();
                        updatedUser = __assign(__assign({}, TEST_USER_DATA), { name: 'Autotest updated TEST_USER', id: userId });
                        // Test
                        return [4 /*yield*/, request
                                .put(routes.users.update(userId))
                                .set('Accept', 'application/json')
                                .send(updatedUser)
                                .expect(200)
                                .expect('Content-Type', /json/)];
                    case 2:
                        // Test
                        _a.sent();
                        password = updatedUser.password, expectedUser = __rest(updatedUser, ["password"]);
                        return [4 /*yield*/, request
                                .get(routes.users.getById(userId))
                                .set('Accept', 'application/json')
                                .expect(200)
                                .expect('Content-Type', /json/)
                                .then(function (res) { return jestExpect(res.body).toMatchObject(expectedUser); })];
                    case 3:
                        _a.sent();
                        // Teardown
                        return [4 /*yield*/, request.delete(routes.users.delete(userId))];
                    case 4:
                        // Teardown
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('DELETE', function () {
        it('should delete user successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var userResponse, userId, deleteResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.users.create)
                            .send(TEST_USER_DATA)];
                    case 1:
                        userResponse = _a.sent();
                        userId = userResponse.body.id;
                        return [4 /*yield*/, request.delete(routes.users.delete(userId))];
                    case 2:
                        deleteResponse = _a.sent();
                        expect(deleteResponse.status).oneOf([200, 204]);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should unassign user's tasks upon deletion", function () { return __awaiter(void 0, void 0, void 0, function () {
            var userResponse, userId, boardResponse, boardId, userTaskResponses, userTaskIds, deleteResponse, _i, userTaskIds_1, taskId, newTaskResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.users.create)
                            .send(TEST_USER_DATA)
                            .set('Accept', 'application/json')
                            .expect(201)
                            .expect('Content-Type', /json/)];
                    case 1:
                        userResponse = _a.sent();
                        userId = userResponse.body.id;
                        return [4 /*yield*/, request
                                .post(routes.boards.create)
                                .send(TEST_BOARD_DATA)
                                .set('Accept', 'application/json')
                                .expect(201)
                                .expect('Content-Type', /json/)];
                    case 2:
                        boardResponse = _a.sent();
                        boardId = boardResponse.body.id;
                        return [4 /*yield*/, Promise.all(Array.from(Array(2)).map(function (_, idx) {
                                return request
                                    .post(routes.tasks.create(boardId))
                                    .send({
                                    title: "Task #".concat(idx + 1),
                                    order: idx + 1,
                                    description: 'Lorem ipsum',
                                    userId: userId,
                                    boardId: boardId
                                })
                                    .set('Accept', 'application/json')
                                    .expect(201)
                                    .expect('Content-Type', /json/);
                            }))];
                    case 3:
                        userTaskResponses = _a.sent();
                        userTaskIds = userTaskResponses.map(function (res) { return res.body.id; });
                        return [4 /*yield*/, request.delete(routes.users.delete(userId))];
                    case 4:
                        deleteResponse = _a.sent();
                        expect(deleteResponse.status).oneOf([200, 204]);
                        _i = 0, userTaskIds_1 = userTaskIds;
                        _a.label = 5;
                    case 5:
                        if (!(_i < userTaskIds_1.length)) return [3 /*break*/, 8];
                        taskId = userTaskIds_1[_i];
                        return [4 /*yield*/, request
                                .get(routes.tasks.getById(boardId, taskId))
                                .set('Accept', 'application/json')
                                .expect(200)
                                .expect('Content-Type', /json/)];
                    case 6:
                        newTaskResponse = _a.sent();
                        expect(newTaskResponse.body).to.be.instanceOf(Object);
                        expect(newTaskResponse.body.userId).to.equal(null);
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8: return [4 /*yield*/, Promise.all(userTaskIds.map(function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, request
                                        .delete(routes.tasks.getById(boardId, taskId))
                                        .then(function (response) { return expect(response.status).oneOf([200, 204]); })];
                            });
                        }); }))];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, request
                                .delete(routes.boards.delete(boardId))
                                .then(function (res) { return expect(res.status).oneOf([200, 204]); })];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
