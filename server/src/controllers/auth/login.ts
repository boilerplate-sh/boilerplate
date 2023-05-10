import { Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { assert, object, string, size, refine } from "superstruct";
import isEmail from "isemail";

const Login = object({
  // string and a valid email address
  email: refine(string(), "email", (v) => isEmail.validate(v)),
  // password is between 6 and 30 characters long
  password: size(string(), 6, 30),
});

const login = async (req: Request, res: Response) => {
  try {
    assert(req.body, Login);
    const { email, password } = req.body;

    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Success",
      token,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default login;
