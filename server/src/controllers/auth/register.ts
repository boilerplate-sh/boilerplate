import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { assert, object, string, size, refine } from "superstruct";
import isEmail from "isemail";
import { strongPassword } from "../../lib/utils";

const Signup = object({
  // string and a valid email address
  email: refine(string(), "email", (v) => isEmail.validate(v)),
  // password must be longer than 6 characters
  password: refine(string(), "password", (v) => strongPassword(v)),
  // name is between 2 and 100 characters long
  name: size(string(), 2, 100),
});

const register = async (req: Request, res: Response) => {
  let body;
  try {
    assert(req.body, Signup);
    body = req.body;
  } catch (error) {
    return res.status(400).json({ message: "Please double check your info." });
  }

  const { email, password, name } = body;

  try {
    const hashedPassword = await bcrypt.hash(password, 6);

    const user: Partial<User> = await prismaClient.user.create({
      data: { email, password: hashedPassword, name },
    });

    // deleted user password from being sent in the response
    delete user["password"];

    return res.status(201).json({
      message: "Success",
      user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default register;
