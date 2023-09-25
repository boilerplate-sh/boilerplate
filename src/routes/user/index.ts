import { Router } from "express";
import updateUser from "../../controllers/user/update";
import deleteUser from "../../controllers/user/delete";
import passport from "passport";
const router = Router();

router.put(
  "/update",
  passport.authenticate("jwt", { session: false }),
  updateUser
);
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  deleteUser
);

export default router;
