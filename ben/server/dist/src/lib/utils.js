"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strongPassword = void 0;
var strongPassword = function (value) {
    var hasMinLength = value.length >= 6;
    var hasUppercase = /[A-Z]/.test(value);
    var hasLowercase = /[a-z]/.test(value);
    var hasSpecialChar = /[!@#$%^&*()]/.test(value);
    return hasMinLength && hasUppercase && hasLowercase && hasSpecialChar;
};
exports.strongPassword = strongPassword;
