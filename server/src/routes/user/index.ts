import { Router } from "express";
import update from "../../controllers/user/update";
import passport from "passport";
const router = Router();

router.put("/update", passport.authenticate("jwt", { session: false }), update);

export default router;
