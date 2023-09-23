import express, { Request, Response } from "express";
import passport from "passport";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth/index";
import uploadRoutes from "./src/routes/upload/index";
import emailRoutes from "./src/routes/email/index";
import { setUpPassport } from "./src/services/passport";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(passport.initialize());
app.use(cors());

setUpPassport(passport);

// Serve static files from uploads folder
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/email", emailRoutes);

// Global error handler
app.use((_req: Request, res: Response) => {
  res.status(500).json("Something went wrong!");
});

app.listen(process.env.PORT ?? 8000);
