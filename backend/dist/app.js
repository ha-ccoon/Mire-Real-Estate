"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var yamljs_1 = __importDefault(require("yamljs"));
// import yaml from 'js-yaml';
var dotenv_1 = __importDefault(require("dotenv"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var path_1 = __importDefault(require("path"));
var swaggerDocument = __importStar(require("../swagger.yaml"));
var winston_1 = require("./config/winston");
require("reflect-metadata");
var data_source_1 = __importDefault(require("./config/data-source"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var swaggerSpec = yamljs_1.default.load(path_1.default.join(__dirname, '../build/swagger.yaml'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.listen(5000, function () {
    winston_1.logger.info('The server is listening to 5000');
});
app.get('/api-docs', function (req, res) {
    winston_1.logger.info('GET /');
    res.sendStatus(200);
});
app.get('/api/users', function (req, res) {
    var users = [
        { id: '1', name: 'John' },
        { id: '2', name: 'Jane' },
    ];
    res.json(users);
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
