import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import majorRoutes from "./routes/major.route.js"
import minorRoutes from "./routes/minor.route.js"
import authRoutes from "./routes/auth.route.js"
import connectDB from "./utils/DB.js"
import { homePage } from "./controllers/home.controller.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: '1024kb' }));
app.use(cookieParser(process.env.COOKIE_SECRET)); // Required for `signed: true`

// app.use(cors({
//     origin: process.env.CORS,
//     credentials: true
// }))

const allowedOrigins = [process.env.CORS];

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

const PORT = process.env.PORT || 8080 

app.listen(PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
    connectDB();
});

