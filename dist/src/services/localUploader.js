"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localUpload = void 0;
var multer_1 = __importDefault(require("multer"));
var crypto_1 = __importDefault(require("crypto"));
var path_1 = __importDefault(require("path"));
var uploadFilePath = path_1.default.resolve(__dirname, "../../../", "public/uploads");
var storage = multer_1.default.diskStorage({
    destination: uploadFilePath,
    filename: function (_req, file, cb) {
        var customFileName = crypto_1.default.randomBytes(18).toString("hex"), fileExtension = file.originalname.split(".").pop();
        cb(null, customFileName + "." + fileExtension);
    },
});
exports.localUpload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB file size limit
    },
});
