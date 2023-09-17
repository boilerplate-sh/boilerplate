import multer from "multer";
import crypto from "crypto";
import path from "path";

const uploadFilePath = path.resolve(__dirname, "../../../", "public/uploads");

const storage = multer.diskStorage({
  destination: uploadFilePath,
  filename: function (
    _req,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) {
    let customFileName = crypto.randomBytes(18).toString("hex"),
      fileExtension = file.originalname.split(".").pop();
    cb(null, customFileName + "." + fileExtension);
  },
});

export const localUpload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB file size limit
  },
});
