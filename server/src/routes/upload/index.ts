import { Router } from "express";
import { localUpload } from "../../services/localUploader";
import upload from "../../controllers/upload/upload";

const router = Router();

router.post("/", localUpload.single("file"), upload);

export default router;
