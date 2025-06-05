import express from "express";
import { createNewMajor, getAllMajors, deleteMajor, addSubmajor } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", getAllMajors);

router.post("/", isLoggedIn, createNewMajor)

router.delete("/:id", isLoggedIn, deleteMajor)

router.post("/submajor/:id", isLoggedIn, addSubmajor)

export default router;

