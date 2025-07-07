import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import majorRoutes from "./routes/major.route.js";
import minorRoutes from "./routes/minor.route.js";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./utils/DB.js";
import { homePage } from "./controllers/home.controller.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: '1024kb' }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const allowedOrigins = [process.env.CORS, "http://localhost:5173"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/majors", majorRoutes);
app.use("/api/minors", minorRoutes);
app.get("/", homePage);

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err);
    process.exit(1);
  }
};

startServer();
