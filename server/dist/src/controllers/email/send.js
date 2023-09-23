"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resend_1 = require("../../services/resend");
var send = function (req, res) {
    var _a = req.body, from = _a.from, to = _a.to, subject = _a.subject, html = _a.html;
    console.log("HJHJK");
    try {
        resend_1.resend.emails.send({
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
