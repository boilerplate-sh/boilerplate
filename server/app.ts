import express from "express";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth/index";
import { setUpPassport } from "./src/services/passport";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cors());
setUpPassport(passport);

app.use("/auth", authRoutes);

app.listen(8000);
