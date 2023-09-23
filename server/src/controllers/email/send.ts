import { Request, Response } from "express";
import { resend } from "../../services/resend";

const send = (req: Request, res: Response) => {
  const { from, to, subject, html } = req.body;
  console.log("HJHJK");

  try {
    resend.emails.send({
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
