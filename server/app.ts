import express from "express";
import passport from "passport";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth/index";
import mediaRoutes from "./src/routes/media/index";
import { setUpPassport } from "./src/services/passport";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cors());
setUpPassport(passport);

// Serve static files from uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/v1//auth", authRoutes);
app.use("/api/v1/media", mediaRoutes);

app.listen(8000);
