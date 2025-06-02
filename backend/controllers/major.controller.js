import Post from "../models/post.model.js";
import Author from "../models/author.model.js";
import cloudinary from "../utils/cloudinary.js";
import { validateDesc } from "../utils/helper.js";

export const getAllMajors = async (req, res) => {
    const majors = await Post.find({ type : "Major" });
    if(!majors) res.status(400).json({error : "Internal Error in finding majors"});
    res.status(200).json(majors);
}

export const createNewMajor = async (req, res) => {
    try {
        let {title, author, description, img} = req.body;
        
        const existsAuthor = Author.findById(author);
        if(!existsAuthor) return res.status(401).send({error: "No such author exists"});
        if(req.user?.userId!==author) return res.status(401).send({error: "Only legitimate authors can write"});

        const validate = validateDesc({description});
        if(validate.error) return res.status(501).json(validate);
        const uploadResponse = await cloudinary.uploader.upload(img);

        const major = new Post({
            title, 
            author, 
            description: description.substring(0, 1000),
            img : uploadResponse.secure_url,
            type : "Major",
            submajor : []
        })

        await major.save();
        return res.status(201).json({ success : "Created New Listing" });
    }
    catch(err) {
        res.status(401).json({error : err});
    }
}