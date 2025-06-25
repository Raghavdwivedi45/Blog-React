import express from "express";
import { createNewMajor } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/", isLoggedIn, createNewMajor)


export default router;