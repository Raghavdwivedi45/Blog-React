import express from "express";
import { createNewMajor, getAllMajors, addSubmajor, getMyMinor } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", getAllMajors); 
router.get("/:id", getMyMinor);
router.post("/", isLoggedIn, createNewMajor)
router.post("/submajor/:id", isLoggedIn, addSubmajor)


export default router;