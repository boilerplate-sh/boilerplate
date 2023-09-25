import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";
import { User } from "@prisma/client";

const updateUser = async (req: Request, res: Response) => {
  const user = req.user;
  const { email, password, name } = req.body;
  try {
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const updatedUser: Partial<User | null> = await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        email,
        name,
        password,
      },
    });

    delete updatedUser["password"];

    return res.status(200).json({
      message: "Success",
      user: updatedUser,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateUser;
