import { Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { assert, object, string, size, refine } from "superstruct";
import isEmail from "isemail";

const Signup = object({
  // string and a valid email address
  email: refine(string(), "email", (v) => isEmail.validate(v)),
  // password is between 6 and 30 characters long
  password: size(string(), 6, 30),
  // name is between 2 and 100 characters long
  name: size(string(), 2, 100),
});

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    assert(req.body, Signup);

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
