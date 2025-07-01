import express from "express";
import { createNewMajor, getAllMajors, addSubmajor, getMyMajor } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/", isLoggedIn, createNewMajor)
router.get("/", getAllMajors);
router.get("/:id", getMyMajor);
router.post("/submajor/:id", isLoggedIn, addSubmajor)


export default router;