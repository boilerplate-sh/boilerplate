"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localUpload = void 0;
var multer_1 = __importDefault(require("multer"));
var crypto_1 = __importDefault(require("crypto"));
var storage = multer_1.default.diskStorage({
    destination: "uploads/",
    filename: function (_req, file, cb) {
        var customFileName = crypto_1.default.randomBytes(18).toString("hex"), fileExtension = file.originalname.split(".").pop();
        cb(null, customFileName + "." + fileExtension);
    },
});
exports.localUpload = (0, multer_1.default)({ storage: storage });
