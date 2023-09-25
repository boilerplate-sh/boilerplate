import { Request, Response } from "express";

const upload = (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File was not uploaded" });
    }

    const fileUlr = `${process.env.SERVER_DOMAIN}/uploads/${req.file.filename}`;
    res.status(200).json({ fileUlr });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default upload;
