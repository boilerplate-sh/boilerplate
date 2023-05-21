import { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClient";

const findUser = async (req: Request, res: Response) => {
  const user = req.user;

  try {
    const foundUser = await prismaClient.user.findFirst({
      where: { id: user?.id },
    });

    if (!foundUser) {
      return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json({ message: "success", user: foundUser });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default findUser;
