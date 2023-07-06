"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var winston_1 = require("./config/winston");
require("reflect-metadata");
var index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
var app = (0, express_1.default)();
// swagger 셋업
app.use('/api', index_1.default);
// 포트 연결
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080, function () {
    winston_1.logger.info("The server is listening to ".concat(process.env.PORT));
});
