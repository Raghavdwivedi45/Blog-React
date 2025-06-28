import Post from "../models/post.model.js";
import Reader from "../models/reader.model.js";
import Author from "../models/author.model.js";
import Comment from "../models/comment.model.js";
import cloudinary from "../utils/cloudinary.js";
import mongoose from "mongoose";

export const getAllMajors = async (req, res) => {
    const majors = await Post.find({ type: "Major" }).populate({ path: 'author', select: 'name' });
    if (!majors) res.status(400).json({ error: "Internal Error in finding majors" });
    res.status(200).json(majors);
}

export const getMyMajor = async (req, res) => {
    const {id} = req.params;
    const major = await Post.findById(id).populate({ path: 'author', select: 'name' });
    if (!major) res.status(400).json({ error: "No major with given id found" });
    res.status(200).json(major);
}

export const createNewMajor = async (req, res) => {
    try {
        let { title, author, description, img } = req.body;
        if (description.length<1000) return res.status(501).json({error : "Description is shorter than 1000 characters"});
        const postType = req.originalUrl.substring(5)==="minors" ? "Minor" : "Major";

        const existsAuthor = Author.findById(author);
        if (!existsAuthor) return res.status(401).send({ error: "No such author exists" });
        if (req.user?.userId !== author) return res.status(401).send({ error: "Only legitimate authors can write" });


        const uploadResponse = await cloudinary.uploader.upload(img);
        const post = new Post({
            title,
            author,
            description: description.substring(0, 1300),
            img: uploadResponse.secure_url,
            type: postType,
            submajor: []
        })

        await post.save();
        return res.status(201).json({ success: "Created New Listing" });
    }
    catch (err) {
        res.status(401).json({ error: err.message || "Server Error in Major" });
    }
}

export const deleteMajor = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid ID format." });

        const data = await Post.findByIdAndDelete(id);
        if (!data) return res.status(404).json({ error: "Post not found." });

        return res.status(200).json({ success: "Successfully deleted the Post." });
    } catch (err) {
        return res.status(500).json({ error: err.message || "Server Error" });
    }
}

export const addSubmajor = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid ID format." });

        const data = await Post.findById(id);
        if (!data || data.type !== "Major") return res.status(404).json({ error: "Post not found." });
        if (req.user.userId !== data.author.toString()) return res.status(404).json({ error: "Unauthorized access" });

        const { idx, title, description, secIds } = req.body;

        const currSubmajors = data.submajor;
        const cleanedDescription = description.filter((desc) => desc.trim() !== '');

        if (idx > 0 && idx < currSubmajors.length) currSubmajors.splice(idx - 1, 0, { title, description: cleanedDescription, secIds });
        else currSubmajors.push({ title, description: cleanedDescription, secIds });


        await data.save();
        return res.status(200).json({ success: "Successfully added the submajor." });

    } catch (err) {
        return res.status(500).json({ error: err.message || "Server Error" });
    }
}

export const like = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: "Unauthorised for the action." });

        const data = await Post.findByIdAndUpdate(id,
            { $inc: { likes: req.body.value } },
            { new: true, runValidators: true }) // run schema validators

        if (!data) return res.status(404).json({ error: "Post not found." });

        const model = req.user.type === "author" ? Author : Reader;
        const auth = await model.findById(req.user.userId);
        if (!auth) return res.status(404).json({ error: "User not found." });


        if (!auth.likes.some(item => item.toString() === id)) {
            auth.likes.push(mongoose.Types.ObjectId.createFromHexString(id));
        } else {
            auth.likes = auth.likes.filter(item => item.toString() !== id);
        }

        await auth.save();
        return res.status(200).json({ success: "Successfully liked." });
    } catch (err) {
        return res.status(500).json({ error: err.message || "Server Error" });
    }
}

export const postComment = async (req, res) => {
    try {
        const { id} = req.params; //majorId
        const { msg } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: "Unauthorised for the action." });
        if(!msg || msg.length==0) return res.status(400).json({ error: "Invalid comment." });

        const data = await Post.findById(id);
        if (!data) return res.status(404).json({ error: "Post not found." });

        const model = req.user.type === "author" ? Author : Reader;
        const auth = await model.findById(req.user.userId);
        if (!auth) return res.status(404).json({ error: "User not found." });

        auth.comments.push(mongoose.Types.ObjectId.createFromHexString(id));

        const myComment = new Comment({
            writer : req.user.userId,
            writerType : model == Author ? "Author" : "Reader",
            body : msg,
            parentId : mongoose.Types.ObjectId.createFromHexString(id)
        })

        await auth.save();
        await myComment.save();

        return res.status(200).json({ success: "Comment saved.." });
    } catch (err) {
        return res.status(500).json({ error: err.message || "Server Error" });
    }
}

export const getComment = async (req, res) => {
    try {
        const { majorId } = req.params; 
        if (!mongoose.Types.ObjectId.isValid(majorId)) return res.status(400).json({ error: "Post not found." });

        const allComment = await Comment.find({parentId: majorId}).populate({ path: 'writer', select: 'name' });
        return res.status(200).json(allComment);
    } catch (err) {
        return res.status(500).json({ error: err.message || "Server Error" });
    }
}

export const deleteComment = async (req, res) => {
    try {
        const { majorId } = req.params; 
        if (!mongoose.Types.ObjectId.isValid(majorId)) return res.status(400).json({ error: "Comment not found." });
        await Comment.findByIdAndDelete(majorId);
        
        res.status(200).json({ success : "Comment Deleted" }) 
    }
    catch (err) {
        return res.status(500).json({ error: err.message || "Server Error" });
    }
}