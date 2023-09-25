"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var localMediaUploader_1 = require("../../services/localMediaUploader");
var upload_1 = __importDefault(require("../../controllers/upload/upload"));
var router = (0, express_1.Router)();
router.post("/upload", localMediaUploader_1.localUpload.array("image", 12), upload_1.default);
exports.default = router;
