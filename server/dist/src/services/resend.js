"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resend = void 0;
var resend_1 = require("resend");
exports.resend = new resend_1.Resend(process.env.RESEND_KEY);
