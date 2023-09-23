import { Router } from "express";
import { localUpload } from "../../services/localUploader";
import upload from "../../controllers/upload/upload";
import remove from "../../controllers/upload/remove";

const router = Router();

router.post("/", localUpload.single("file"), upload);
router.post("/remove", remove);

export default router;
