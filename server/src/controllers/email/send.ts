import { Request, Response } from "express";
import { resend } from "../../services/resend";
import { assert, object, string, size, refine } from "superstruct";
import isEmail from "isemail";

const Send = object({
  // string and a valid email address
  from: refine(string(), "from", (v) => isEmail.validate(v)),
  // string and a valid email address
  to: refine(string(), "to", (v) => isEmail.validate(v)),
  // email subject line is between 2 and 200 characters long
  subject: size(string(), 2, 200),
  // Emails body
  html: string(),
});

const send = (req: Request, res: Response) => {
  let body;
  try {
    assert(req.body, Send);
    body = req.body;
  } catch (error) {
    return res.status(400).json({ message: "Please double check your info." });
  }

  const { from, to, subject, html } = body;

  try {
    resend.sendEmail({
      from: from,
      to: to,
      subject: subject,
      html: html,
    });
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "There was an error sending the email" });
  }
};

export default send;
