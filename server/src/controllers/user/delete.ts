import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";

const deleteUser = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await prismaClient.user.delete({
      where: {
        id: user.id,
      },
    });

    return res.status(200).json({
      message: "Success",
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteUser;
