"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var localUploader_1 = require("../../services/localUploader");
var upload_1 = __importDefault(require("../../controllers/upload/upload"));
var router = (0, express_1.Router)();
router.post("/", localUploader_1.localUpload.single("file"), upload_1.default);
exports.default = router;
