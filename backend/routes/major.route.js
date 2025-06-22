import express from "express";
import { createNewMajor, getAllMajors, deleteMajor, addSubmajor, like, postComment, isLikeComment, deleteComment } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", getAllMajors);

router.post("/", isLoggedIn, createNewMajor)

router.delete("/:id", isLoggedIn, deleteMajor)

router.post("/submajor/:id", isLoggedIn, addSubmajor)

router.patch("/likes/:id", isLoggedIn, like)
router.patch("/comments/:id", isLoggedIn, postComment)
router.get("/comment/:majorId", isLikeComment)

router.delete("/comment/:majorId", isLoggedIn, deleteComment)


export default router;

