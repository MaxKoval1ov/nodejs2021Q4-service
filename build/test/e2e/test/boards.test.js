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
var _a = require('../lib'), unauthorizedRequest = _a.request, routes = _a.routes;
var debug = require('debug')('rs:test:boards');
var _b = require('../utils'), createAuthorizedRequest = _b.createAuthorizedRequest, shouldAuthorizationBeTested = _b.shouldAuthorizationBeTested;
var TEST_BOARD_DATA = {
    title: 'Autotest board',
    columns: [
        { title: 'Backlog', order: 1 },
        { title: 'Sprint', order: 2 }
    ]
};
describe('Boards suite', function () {
    var request = unauthorizedRequest;
    var testBoardId;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!shouldAuthorizationBeTested) return [3 /*break*/, 2];
                    return [4 /*yield*/, createAuthorizedRequest(unauthorizedRequest)];
                case 1:
                    request = _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, request
                        .post(routes.boards.create)
                        .set('Accept', 'application/json')
                        .send(TEST_BOARD_DATA)
                        .then(function (res) { return (testBoardId = res.body.id); })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .delete(routes.boards.delete(testBoardId))
                        .then(function (res) { return expect(res.status).oneOf([200, 204]); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('GET', function () {
        it('should get all boards', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get(routes.boards.getAll)
                            .set('Accept', 'application/json')
                            .expect(200)
                            .expect('Content-Type', /json/)
                            .then(function (res) {
                            debug(res.body);
                            expect(res.body).to.be.an('array');
                            jestExpect(res.body).not.toHaveLength(0);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should get a board by id', function () { return __awaiter(void 0, void 0, void 0, function () {
            var expectedBoard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get(routes.boards.getAll)
                            .expect(200)
                            .then(function (res) {
                            jestExpect(Array.isArray(res.body)).toBe(true);
                            jestExpect(res.body).not.toHaveLength(0);
                            jestExpect(res.body.find(function (e) { return e.id === testBoardId; })).not.toBe(undefined);
                            expectedBoard = res.body.find(function (e) { return e.id === testBoardId; });
                        })];
                    case 1:
                        _a.sent();
                        // Test
                        return [4 /*yield*/, request
                                .get(routes.boards.getById(testBoardId))
                                .set('Accept', 'application/json')
                                .expect(200)
                                .expect('Content-Type', /json/)
                                .then(function (res) {
                                jestExpect(res.body).toEqual(expectedBoard);
                            })];
                    case 2:
                        // Test
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('POST', function () {
        it('should create board successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var boardId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.boards.create)
                            .set('Accept', 'application/json')
                            .send(TEST_BOARD_DATA)
                            .expect(201)
                            .expect('Content-Type', /json/)
                            .then(function (res) {
                            boardId = res.body.id;
                            expect(res.body.id).to.be.a('string');
                            jestExpect(res.body).toMatchObject(TEST_BOARD_DATA);
                        })];
                    case 1:
                        _a.sent();
                        // Teardown
                        return [4 /*yield*/, request.delete(routes.boards.delete(boardId))];
                    case 2:
                        // Teardown
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('PUT', function () {
        it('should update board successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var boardToUpdate, updatedBoard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.boards.create)
                            .set('Accept', 'application/json')
                            .send(TEST_BOARD_DATA)
                            .then(function (res) {
                            boardToUpdate = res.body;
                        })];
                    case 1:
                        _a.sent();
                        updatedBoard = __assign(__assign({}, boardToUpdate), { title: 'Autotest updated board' });
                        // Test
                        return [4 /*yield*/, request
                                .put(routes.boards.update(boardToUpdate.id))
                                .set('Accept', 'application/json')
                                .send(updatedBoard)
                                .expect(200)
                                .expect('Content-Type', /json/)];
                    case 2:
                        // Test
                        _a.sent();
                        return [4 /*yield*/, request
                                .get(routes.boards.getById(updatedBoard.id))
                                .set('Accept', 'application/json')
                                .expect(200)
                                .expect('Content-Type', /json/)
                                .then(function (res) { return jestExpect(res.body).toMatchObject(updatedBoard); })];
                    case 3:
                        _a.sent();
                        // Teardown
                        return [4 /*yield*/, request.delete(routes.boards.delete(updatedBoard.id))];
                    case 4:
                        // Teardown
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('DELETE', function () {
        it('should delete board successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var boardId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.boards.create)
                            .set('Accept', 'application/json')
                            .send(TEST_BOARD_DATA)
                            .expect(201)
                            .expect('Content-Type', /json/)
                            .then(function (res) { return (boardId = res.body.id); })];
                    case 1:
                        _a.sent();
                        // Test
                        return [4 /*yield*/, request
                                .delete(routes.boards.delete(boardId))
                                .then(function (res) { return expect(res.status).oneOf([200, 204]); })];
                    case 2:
                        // Test
                        _a.sent();
                        return [4 /*yield*/, request.get(routes.boards.getById(boardId)).expect(404)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should delete board's tasks upon deletion", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, boardId, boardTaskResponses, boardTaskIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post(routes.boards.create)
                            .set('Accept', 'application/json')
                            .send(TEST_BOARD_DATA)
                            .expect(201)];
                    case 1:
                        res = _a.sent();
                        boardId = res.body.id;
                        return [4 /*yield*/, Promise.all(Array.from(Array(5)).map(function (_, idx) {
                                return request
                                    .post(routes.tasks.create(boardId))
                                    .send({
                                    title: "Task #".concat(idx + 1),
                                    order: idx + 1,
                                    description: 'Lorem ipsum',
                                    boardId: boardId,
                                    userId: null,
                                    columnId: null
                                })
                                    .set('Accept', 'application/json')
                                    .expect(201)
                                    .expect('Content-Type', /json/);
                            }))];
                    case 2:
                        boardTaskResponses = _a.sent();
                        boardTaskIds = boardTaskResponses.map(function (response) { return response.body.id; });
                        return [4 /*yield*/, Promise.all(boardTaskIds.map(function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, request
                                            .get(routes.tasks.getById(boardId, taskId))
                                            .set('Accept', 'application/json')
                                            .expect(200)
                                            .expect('Content-Type', /json/)
                                            .then(function (response) { return expect(response.body.boardId).to.equal(boardId); })];
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        // Test:
                        return [4 /*yield*/, request
                                .delete(routes.boards.delete(boardId))
                                .then(function (response) { return expect(response.status).oneOf([200, 204]); })];
                    case 4:
                        // Test:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(boardTaskIds.map(function (taskId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, request.get(routes.tasks.getById(boardId, taskId)).expect(404)];
                            }); }); }))];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
