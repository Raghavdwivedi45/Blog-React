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

app.use(express.json({ limit: '32kb' }));
app.use(cookieParser(process.env.COOKIE_SECRET)); // Required for `signed: true`

app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))


app.use("/api/auth", authRoutes);
app.use("/api/majors", majorRoutes);
app.use("/api/minors", minorRoutes);

app.get("/", homePage);


// if(process.env.NODE_ENV==="production") {
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//     const viteBuildPath = path.join(__dirname, '../frontend/vite-project/dist');
//     app.use(express.static(viteBuildPath));

//     app.get('*', (req, res) => {
//     res.sendFile(path.join(viteBuildPath, 'index.html'));
//     });
// }

const PORT = process.env.PORT || 8080 

app.listen(PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
    connectDB();
});

