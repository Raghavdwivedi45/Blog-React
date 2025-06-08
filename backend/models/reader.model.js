import mongoose from "mongoose";
import ImageSchema from "./image.model.js";

const readerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "../assets/avatar.jpg"
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.ObjectId,
        ref: "Post",
        default: []
    }]
}, 
{ timestamps: true }
);

const Reader = mongoose.model("Reader", readerSchema);

export default Reader;