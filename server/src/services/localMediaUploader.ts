import multer from "multer";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: "uploads/",
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

export const localUpload = multer({ storage: storage });
