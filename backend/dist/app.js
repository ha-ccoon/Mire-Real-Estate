"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var winston_1 = require("./config/winston");
require("reflect-metadata");
var data_source_1 = __importDefault(require("./config/data-source"));
var app = (0, express_1.default)();
app.listen(5000, function () {
    winston_1.logger.info('The server is listening to 5000');
});
app.get('/', function (req, res) {
    winston_1.logger.info('GET /');
    res.sendStatus(200);
});
app.get('/error', function (req, res) {
    winston_1.logger.error('Error message');
    res.sendStatus(500);
});
data_source_1.default.initialize()
    .then(function () {
    winston_1.logger.info('Database is connected');
})
    .catch(function (error) { return winston_1.logger.error(error); });
