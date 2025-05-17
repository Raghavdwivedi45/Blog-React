import mongoose from "mongoose";
import ImageSchema from "./image.model.js";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: ImageSchema,
        _id : false
    },
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    password : {
        type: String,
        required:true
    },
    majorLikes: [{
        type: mongoose.ObjectId,
        ref: "majors",
        default: []
    }],
    minorLikes: [{
        type: mongoose.ObjectId,
        ref: "minors",
        default: []
    }]
}, 
{ timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

export default Author;