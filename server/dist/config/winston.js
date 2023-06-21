"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = __importDefault(require("winston"));
var winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var logDir = 'logs';
var _a = winston_1.default.format, combine = _a.combine, timestamp = _a.timestamp, printf = _a.printf;
// log format 설정
var logFormat = printf(function (info) {
    return "".concat(info.timestamp, " ").concat(info.level, ": ").concat(info.message);
});
// transport 설정
var infoTransport = new winston_daily_rotate_file_1.default({
    level: 'info',
    datePattern: 'YYYY-MM-DD',
    dirname: logDir + '/info',
    filename: "%DATE%.log",
    maxFiles: 30,
    zippedArchive: true,
});
var errorTransport = new winston_daily_rotate_file_1.default({
    level: 'error',
    datePattern: 'YYYY-MM-DD',
    dirname: logDir + '/error',
    filename: "%DATE%.error.log",
    maxFiles: 30,
    zippedArchive: true,
});
// 로그 생성
var logger = winston_1.default.createLogger({
    format: combine(timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), logFormat),
    transports: [infoTransport, errorTransport],
});
exports.logger = logger;
// Production 환경이 아닌 경우(dev 등)
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
    }));
}
