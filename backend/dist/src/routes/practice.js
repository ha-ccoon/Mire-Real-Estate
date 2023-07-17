"use strict";
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
console.log(generateRandomString(1, 10));
