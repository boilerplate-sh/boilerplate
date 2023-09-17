"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("./src/routes/auth/index"));
var index_2 = __importDefault(require("./src/routes/upload/index"));
var passport_2 = require("./src/services/passport");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(passport_1.default.initialize());
app.use((0, cors_1.default)());
(0, passport_2.setUpPassport)(passport_1.default);
// Serve static files from uploads folder
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// Routes
app.use("/api/v1/auth", index_1.default);
app.use("/api/v1/upload", index_2.default);
app.use(function (_req, res) {
    res.status(500).json("Something went wrong!");
});
app.listen(8000);
