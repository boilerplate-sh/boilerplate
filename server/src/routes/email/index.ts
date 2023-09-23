import { Router } from "express";
import send from "../../controllers/email/send";

const router = Router();

router.post("/send", send);

export default router;
