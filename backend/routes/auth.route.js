import express from "express";
import { handleSignup, handleLogin } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/reader/signup", handleSignup);
router.post("/author/signup", handleSignup);

router.post("/reader/login", handleLogin);
router.post("/author/login", handleLogin);

export default router;