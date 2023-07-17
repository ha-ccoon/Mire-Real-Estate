"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomBuildingType = exports.updatedAt = exports.createdAt = exports.generateRandomBuildingStructure = exports.generateRandomDirection = exports.generateRandomParkingValue = exports.generateRandomSaleMethod = exports.generateRandomPropertyType = exports.generateRandomMoveInMonth = exports.generateRandomYear = exports.generateRandomURL = exports.generateRandomAddress = exports.generateRandomSmallCost = exports.generateRandomSalePrice = exports.generateRandomString = void 0;
var generateRandomString = function (minLength, maxLength) {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    var result = '';
    for (var i = 0; i < length; i += 1) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};
exports.generateRandomString = generateRandomString;
// 천만-억단위 랜덤 금액 생성
var generateRandomSalePrice = function (minAmount, maxAmount) {
    var amount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
    if (amount >= 100000000) {
        var billionUnit = Math.floor(amount / 100000000); // 억 단위
        var millionUnit_1 = Math.floor((amount % 100000000) / 10000); // 만원 단위
        if (millionUnit_1 > 0) {
            return "".concat(billionUnit, "\uC5B5 ").concat(millionUnit_1, "\uB9CC\uC6D0");
        }
        return "".concat(billionUnit, "\uC5B5");
    }
    var millionUnit = Math.floor(amount / 10000); // 만원 단위
    var thousandUnit = Math.floor((amount % 10000) / 1000); // 천원 단위
    if (thousandUnit > 0) {
        return "".concat(millionUnit, "\uCC9C\uB9CC\uC6D0 ").concat(thousandUnit, "\uCC9C\uC6D0");
    }
    return "".concat(millionUnit, "\uCC9C\uB9CC\uC6D0");
};
exports.generateRandomSalePrice = generateRandomSalePrice;
// - 백만 단위 랜덤 금액 생성
var generateRandomSmallCost = function () {
    var units = ['백만원', '천만원'];
    var randomIndex = Math.floor(Math.random() * units.length);
    var amount = Math.floor(Math.random() * 100) * 10 + 1;
    return "".concat(amount).concat(units[randomIndex]);
};
exports.generateRandomSmallCost = generateRandomSmallCost;
// 랜덤 주소 생성
var streetNames = [
    'Oak Street',
    'Maple Avenue',
    'Cedar Lane',
    'Pine Road',
    'Elm Court',
];
var cities = [
    'New York',
    'Los Angeles',
    'London',
    'Paris',
    'Tokyo',
];
var states = ['CA', 'NY', 'TX', 'FL', 'IL'];
var zipCodes = ['12345', '67890', '98765', '43210', '56789'];
function generateRandomAddress() {
    var randomStreet = streetNames[Math.floor(Math.random() * streetNames.length)];
    var randomCity = cities[Math.floor(Math.random() * cities.length)];
    var randomState = states[Math.floor(Math.random() * states.length)];
    var randomZipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];
    var randomAddress = "".concat(Math.floor(Math.random() * 1000) + 1, " ").concat(randomStreet, ", ").concat(randomCity, ", ").concat(randomState, " ").concat(randomZipCode);
    return randomAddress;
}
exports.generateRandomAddress = generateRandomAddress;
// 랜덤 url 생성
var domains = [
    'example.com',
    'google.com',
    'yahoo.com',
    'bing.com',
    'amazon.com',
];
function generateRandomURL() {
    var randomDomain = domains[Math.floor(Math.random() * domains.length)];
    var randomPath = Math.random().toString(36).substring(2, 8); // 6자리 랜덤 문자열 생성
    var randomURL = "https://www.".concat(randomDomain, "/").concat(randomPath);
    return randomURL;
}
exports.generateRandomURL = generateRandomURL;
// 랜덤 년도 생성
function generateRandomYear() {
    var currentYear = new Date().getFullYear();
    var minYear = currentYear - 100; // 최소값: 현재 연도 - 100
    var maxYear = currentYear; // 최대값: 현재 연도
    var randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    return randomYear;
}
exports.generateRandomYear = generateRandomYear;
// 랜덤 월 생성
function generateRandomMoveInMonth() {
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    var moveInMonths = ['January', 'February', 'Move-In'];
    var randomIndex = Math.floor(Math.random() * moveInMonths.length);
    if (randomIndex === 2) {
        return months[Math.floor(Math.random() * 12)]; // 1월부터 12월 중에서 랜덤하게 선택
    }
    return moveInMonths[randomIndex];
}
exports.generateRandomMoveInMonth = generateRandomMoveInMonth;
function generateRandomPropertyType() {
    var propertyType = [
        'apartment',
        'officetel',
        'oneroom',
        'tworoom',
        'commercial',
        'store',
        'factory',
        'forest',
        'land',
        'house',
    ];
    var randomIndex = Math.floor(Math.random() * propertyType.length);
    return propertyType[randomIndex];
}
exports.generateRandomPropertyType = generateRandomPropertyType;
function generateRandomSaleMethod() {
    var saleMethod = ['sale', 'key_money', 'rent'];
    var randomIndex = Math.floor(Math.random() * saleMethod.length);
    return saleMethod[randomIndex];
}
exports.generateRandomSaleMethod = generateRandomSaleMethod;
function generateRandomParkingValue() {
    var parkingOptions = ['1대', '1.5대', '2대', '없음'];
    var randomIndex = Math.floor(Math.random() * parkingOptions.length);
    return parkingOptions[randomIndex];
}
exports.generateRandomParkingValue = generateRandomParkingValue;
function generateRandomDirection() {
    var direction = ['남향', '북향', '남서향', '남동향'];
    var randomIndex = Math.floor(Math.random() * direction.length);
    return direction[randomIndex];
}
exports.generateRandomDirection = generateRandomDirection;
function generateRandomBuildingStructure() {
    var buildingStructure = ['계단식', '복도식'];
    var randomIndex = Math.floor(Math.random() * buildingStructure.length);
    return buildingStructure[randomIndex];
}
exports.generateRandomBuildingStructure = generateRandomBuildingStructure;
function generateRandomCreatedAt() {
    var startDate = new Date(2010, 0, 1); // 시작일을 2010년 1월 1일로 설정
    var endDate = new Date(); // 현재 시간을 종료일로 설정
    var randomCreatedAtTimestamp = Math.random() * (endDate.getTime() - startDate.getTime()) +
        startDate.getTime();
    var randomCreatedAt = new Date(randomCreatedAtTimestamp);
    var createdAt = randomCreatedAt.toISOString();
    return createdAt;
}
function generateRandomUpdatedAt(createdDate) {
    var endDate = new Date(); // 현재 시간을 종료일로 설정
    var randomUpdatedAtTimestamp = Math.random() * (endDate.getTime() - createdDate.getTime()) +
        createdDate.getTime();
    var randomUpdatedAt = new Date(randomUpdatedAtTimestamp);
    var updatedAt = randomUpdatedAt.toISOString();
    return updatedAt;
}
exports.createdAt = generateRandomCreatedAt();
exports.updatedAt = generateRandomUpdatedAt(new Date(exports.createdAt));
function generateRandomBuildingType() {
    var BuildingType = ['근린상가', '주상복합'];
    var randomIndex = Math.floor(Math.random() * BuildingType.length);
    return BuildingType[randomIndex];
}
exports.generateRandomBuildingType = generateRandomBuildingType;
