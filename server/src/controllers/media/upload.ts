import { Request, Response } from "express";

const Upload = (req: Request, res: Response) => {
  try {
    if (!req.files || !(req.files instanceof Array)) {
      return res.status(400).json({ message: "No files were uploaded" });
    }

    let fileUrls: string[] = [];

    req.files.forEach((file: Express.Multer.File) => {
      const fileUlr = `${process.env.SERVER_DOMAIN}/uploads/${file.filename}`;
      fileUrls.push(fileUlr);
    });
    res.status(200).json({ fileUrls: fileUrls });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default Upload;
