"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var register_1 = __importDefault(require("../../controllers/auth/register"));
var login_1 = __importDefault(require("../../controllers/auth/login"));
var passport_1 = __importDefault(require("passport"));
var findUser_1 = __importDefault(require("../../controllers/auth/findUser"));
var router = express_1.default.Router();
router.get("/user", passport_1.default.authenticate("jwt", { session: false }), findUser_1.default);
router.post("/register", register_1.default);
router.post("/login", login_1.default);
exports.default = router;
