import mongoose from "mongoose";
import ImageSchema from "./image.model.js";

const readerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    img: {
        type: ImageSchema,
        _id : false
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
}, 
{ timestamps: true }
);

const Reader = mongoose.model("Reader", readerSchema);

export default Reader;