import express from "express";
import register from "../../controllers/auth/register";
import login from "../../controllers/auth/login";
import passport from "passport";
import findUser from "../../controllers/auth/findUser";
const router = express.Router();

router.get("/user", passport.authenticate("jwt", { session: false }), findUser);
router.post("/register", register);
router.post("/login", login);

export default router;
