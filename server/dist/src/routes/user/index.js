"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var update_1 = __importDefault(require("../../controllers/user/update"));
var delete_1 = __importDefault(require("../../controllers/user/delete"));
var passport_1 = __importDefault(require("passport"));
var router = (0, express_1.Router)();
router.put("/update", passport_1.default.authenticate("jwt", { session: false }), update_1.default);
router.delete("/delete", passport_1.default.authenticate("jwt", { session: false }), delete_1.default);
exports.default = router;
