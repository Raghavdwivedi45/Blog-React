import express from "express";
import { createNewMajor, getAllMajors, deleteMajor, addSubmajor, like, postComment, isLikeComment } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", getAllMajors);

router.post("/", isLoggedIn, createNewMajor)

router.delete("/:id", isLoggedIn, deleteMajor)

router.post("/submajor/:id", isLoggedIn, addSubmajor)

router.patch("/likes/:id", isLoggedIn, like)
router.patch("/comments/:id", isLoggedIn, postComment)
router.get("/like/comment/:userId/:majorId", isLoggedIn, isLikeComment)

export default router;

