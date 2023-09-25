"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resend_1 = require("../../services/resend");
var superstruct_1 = require("superstruct");
var isemail_1 = __importDefault(require("isemail"));
var Send = (0, superstruct_1.object)({
    // string and a valid email address
    from: (0, superstruct_1.refine)((0, superstruct_1.string)(), "from", function (v) { return isemail_1.default.validate(v); }),
    // string and a valid email address
    to: (0, superstruct_1.refine)((0, superstruct_1.string)(), "to", function (v) { return isemail_1.default.validate(v); }),
    // email subject line is between 2 and 200 characters long
    subject: (0, superstruct_1.size)((0, superstruct_1.string)(), 2, 200),
    // Emails body
    html: (0, superstruct_1.string)(),
});
var send = function (req, res) {
    var body;
    try {
        (0, superstruct_1.assert)(req.body, Send);
        body = req.body;
    }
    catch (error) {
        return res.status(400).json({ message: "Please double check your info." });
    }
    var from = body.from, to = body.to, subject = body.subject, html = body.html;
    try {
        resend_1.resend.sendEmail({
            from: from,
            to: to,
            subject: subject,
            html: html,
        });
        return res.status(200).json({ message: "success" });
    }
    catch (error) {
        return res
            .status(404)
            .json({ message: "There was an error sending the email" });
    }
};
exports.default = send;
