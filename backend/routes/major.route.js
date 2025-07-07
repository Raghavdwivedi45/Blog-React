import express from "express";
import { createNewMajor, getAllMajors, getMyMajor, getSubmajor, deleteMajor, addSubmajor, like, postComment, getComment, deleteComment } from "../controllers/major.controller.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", getAllMajors);
router.get("/:id", getMyMajor);
router.get("/:id/sub/:idx", getSubmajor);

router.post("/", isLoggedIn, createNewMajor)

router.delete("/:id", isLoggedIn, deleteMajor)

router.post("/submajor/:id", isLoggedIn, addSubmajor)


router.patch("/likes/:id", isLoggedIn, like)
router.patch("/comments/:id", isLoggedIn, postComment)
router.get("/comment/:majorId", getComment)

router.delete("/comment/:majorId", isLoggedIn, deleteComment)


export default router;

