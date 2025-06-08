import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        default: "../assets/avatar.jpg"
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
    likes: [{
        type: mongoose.ObjectId,
        ref: "Post",
        default: []
    }]
}, 
{ timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

export default Author;