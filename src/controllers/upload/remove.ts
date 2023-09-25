import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const rootDirectory = path.dirname(require.main!.filename);
const uploadsDirectory = path.join(rootDirectory, "..", "public", "uploads");

const removeUpload = async (req: Request, res: Response) => {
  const { fileUrl } = req.body;

  if (!fileUrl) {
    return res.status(400).send({ error: "fileUrl must be provided" });
  }

  const filename = path.basename(fileUrl);

  const filePath = path.resolve(
    path.normalize(path.join(uploadsDirectory, filename))
  );

  if (!filePath.startsWith(uploadsDirectory)) {
    return res.status(400).send({ error: "Invalid file path" });
  }

  try {
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
      res.status(200).send({ message: "File deleted successfully" });
    } else {
      res.status(404).send({ error: "File not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the file" });
  }
};

export default removeUpload;
