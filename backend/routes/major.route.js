import express from "express";
import { createNewMajor, getAllMajors } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", getAllMajors);

router.post("/", isLoggedIn, createNewMajor)

export default router;

