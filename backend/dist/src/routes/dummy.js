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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateData = void 0;
var mock = __importStar(require("./mock"));
var mysql_1 = __importDefault(require("../config/mysql"));
var createDummy = function (count) {
    var dummyData = [];
    for (var i = 1; i <= count; i += 1) {
        var generateRandomPropertyType = mock.generateRandomPropertyType, generateRandomSaleMethod = mock.generateRandomSaleMethod, generateRandomString = mock.generateRandomString, generateRandomSalePrice = mock.generateRandomSalePrice, generateRandomSmallCost = mock.generateRandomSmallCost, generateRandomAddress = mock.generateRandomAddress, generateRandomURL = mock.generateRandomURL, generateRandomYear = mock.generateRandomYear, generateRandomMoveInMonth = mock.generateRandomMoveInMonth, generateRandomParkingValue = mock.generateRandomParkingValue, generateRandomDirection = mock.generateRandomDirection, generateRandomBuildingStructure = mock.generateRandomBuildingStructure, createdAt = mock.createdAt, updatedAt = mock.updatedAt, generateRandomBuildingType = mock.generateRandomBuildingType;
        dummyData.push({
            urgent_sale: Math.random() < 0.5,
            property_name: generateRandomString(4, 10),
            property_type: generateRandomPropertyType(),
            sale_method: generateRandomSaleMethod(),
            sale_price: generateRandomSalePrice(10000000, 10000000000000),
            deposit: generateRandomSmallCost(),
            premium_cost: generateRandomSmallCost(),
            management_cost: generateRandomSmallCost(),
            price_nego: Math.random() < 0.5,
            gross_leasable_area: Math.floor(Math.random() * 100) + 1,
            exclusive_area: Math.floor(Math.random() * 100) + 1,
            building_area: Math.floor(Math.random() * 100) + 1,
            land_area: Math.floor(Math.random() * 1000) + 1,
            postal_code: generateRandomAddress(),
            detail_address: generateRandomAddress(),
            floor_plan: generateRandomURL(),
            property_picture: generateRandomURL(),
            year_built: generateRandomYear(),
            availability: generateRandomMoveInMonth(),
            parking: generateRandomParkingValue(),
            direction: generateRandomDirection(),
            floor: Math.floor(Math.random() * 10) + 1,
            total_floors: Math.floor(Math.random() * 30) + 1,
            total_households: Math.floor(Math.random() * 400) + 1,
            room: Math.floor(Math.random() * 5) + 1,
            washroom: Math.floor(Math.random() * 5) + 1,
            building_structure: generateRandomBuildingStructure(),
            description: '어쩌구 저쩌구',
            building_type: generateRandomBuildingType(),
            hoist: Math.floor(Math.random() * 100) + 1,
            power: Math.floor(Math.random() * 300) + 1, // power
        });
    }
    // varchar2 255
    return dummyData;
};
var insertDummyData = function (dummyData) { return __awaiter(void 0, void 0, void 0, function () {
    var query_1, values;
    return __generator(this, function (_a) {
        try {
            query_1 = "\n      INSERT INTO property (\n        urgent_sale, property_name, property_type, sale_method, sale_price, deposit, premium_cost, management_cost, price_nego, gross_leasable_area,exclusive_area,building_area,land_area,postal_code,detail_address,floor_plan,property_picture,year_built,availability,parking,direction,floor,total_floors,total_households,room,washroom,building_structure,description,building_type,hoist,power\n      ) VALUES (\n        ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?\n      )";
            values = dummyData.map(function (data) { return __awaiter(void 0, void 0, void 0, function () {
                var value, rows;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            value = [
                                data.urgent_sale,
                                data.property_name,
                                data.property_type,
                                data.sale_method,
                                data.sale_price,
                                data.deposit,
                                data.premium_cost,
                                data.management_cost,
                                data.price_nego,
                                data.gross_leasable_area,
                                data.exclusive_area,
                                data.building_area,
                                data.land_area,
                                data.postal_code,
                                data.detail_address,
                                data.floor_plan,
                                data.property_picture,
                                data.year_built,
                                data.availability,
                                data.parking,
                                data.direction,
                                data.floor,
                                data.total_floors,
                                data.total_households,
                                data.room,
                                data.washroom,
                                data.building_structure,
                                data.description,
                                data.building_type,
                                data.hoist,
                                data.power,
                            ];
                            return [4 /*yield*/, mysql_1.default.pool.query(query_1, value)];
                        case 1:
                            rows = (_a.sent())[0];
                            return [2 /*return*/, rows];
                    }
                });
            }); });
            return [2 /*return*/, values];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
var generateData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = createDummy(50);
                return [4 /*yield*/, insertDummyData(data)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, results];
        }
    });
}); };
exports.generateData = generateData;
exports.default = exports.generateData;
