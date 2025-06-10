import express from "express";
import { handleSignup, handleLogin, handleLogout, getAllAuthors, getAllPosts, } from "../controllers/auth.controller.js";
import { isLoggedIn1 } from "../utils/helper.js";

const router = express.Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);

router.get("/isLoggedIn", isLoggedIn1);

router.get("/logout", handleLogout);

router.get("/authors", getAllAuthors);
router.get("/posts/:id", getAllPosts);


export default router;