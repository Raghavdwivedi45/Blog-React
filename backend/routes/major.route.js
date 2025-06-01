import express from "express";
import { getAllMajors } from "../controllers/major.controller.js";
const router = express.Router();

router.get("/", getAllMajors)

export default router;

