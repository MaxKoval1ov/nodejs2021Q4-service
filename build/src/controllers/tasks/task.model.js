"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Task = /** @class */ (function () {
    function Task(task, id) {
        if (id === void 0) { id = (0, uuid_1.v4)(); }
        this.id = id;
        this.title = task.title;
        this.order = task.order;
        this.description = task.description;
        this.userId = task.userId;
        this.boardId = task.boardId;
        this.columnId = task.columnId;
    }
    return Task;
}());
exports.default = Task;
