"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var winston_1 = __importDefault(require("./config/winston"));
require("reflect-metadata");
var index_1 = __importDefault(require("./routes/index"));
var mongoDB_1 = __importDefault(require("./config/mongoDB"));
// import { PoolConnection } from 'mysql2/typings/mysql/lib/PoolConnection';
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use('/api', index_1.default);
// MySQL 연결
// pool.getConnection((error: Error, connection: PoolConnection | undefined) => {
//   if (error) {
//     logger.error('MySQL Connection: ', error);
//   }
//   logger.info('MySQL is connected');
//   pool.releaseConnection(connection);
// });
// MongoDB 연결
(0, mongoDB_1.default)();
// 포트 연결
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080, function () {
    winston_1.default.info("The server is listening to ".concat(process.env.PORT));
});
