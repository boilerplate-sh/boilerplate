import { Router } from "express";
import { localUpload } from "../../services/localMediaUploader";
import Upload from "../../controllers/media/upload";

const router = Router();

router.post("/upload", localUpload.array("image", 12), Upload);

export default router;
