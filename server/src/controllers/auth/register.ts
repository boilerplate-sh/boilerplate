import { Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

exports.register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 6);

    const user: Partial<User> = await prismaClient.user.create({
      data: { email, password: hashedPassword, name },
    });

    delete user["password"];

    return res.status(201).json({
      message: "Something is not right",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something is not right",
    });
  }
};
