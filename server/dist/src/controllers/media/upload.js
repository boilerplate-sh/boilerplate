"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Upload = function (req, res) {
    console.log(req.file);
    try {
        if (!req.files || !(req.files instanceof Array)) {
            return res.status(400).json({ message: "No files were uploaded" });
        }
        var fileUrls_1 = [];
        req.files.forEach(function (file) {
            var fileUlr = "".concat(process.env.SERVER_DOMAIN, "/uploads/").concat(file.filename);
            fileUrls_1.push(fileUlr);
        });
        res.status(200).json({ fileUrls: fileUrls_1 });
    }
    catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
exports.default = Upload;
