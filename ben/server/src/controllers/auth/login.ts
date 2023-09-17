import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: Partial<User | null> = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    const validPassword = await bcrypt.compare(password, user.password!);

    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    delete user["password"];

    return res.status(200).json({
      message: "Success",
      token,
      user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default login;
