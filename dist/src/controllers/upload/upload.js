"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload = function (req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File was not uploaded" });
        }
        var fileUlr = "".concat(process.env.SERVER_DOMAIN, "/uploads/").concat(req.file.filename);
        res.status(200).json({ fileUlr: fileUlr });
    }
    catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
exports.default = upload;
