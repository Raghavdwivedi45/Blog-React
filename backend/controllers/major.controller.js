import Post from "../models/post.model.js";

export const getAllMajors = async (req, res) => {
    const majors = await Post.find({ type : "Major" });
    if(!majors) res.status(400).json({error : "Internal Error in finding majors"});
    res.status(200).json(majors);
}