import express from "express";
import { handleSignup, handleLogin, handleLogout, getAllAuthors, getAllPosts } from "../controllers/auth.controller.js";
import { isLoggedIn } from "../utils/helper.js";

const router = express.Router();

router.post("/reader/signup", handleSignup);
router.post("/author/signup", handleSignup);

router.post("/reader/login", handleLogin);
router.post("/author/login", handleLogin);
router.get("/logout", handleLogout);

router.get("/authors", getAllAuthors);
router.get("/posts/:id", getAllPosts);

export default router;