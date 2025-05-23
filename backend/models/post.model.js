import mongoose from "mongoose";
import ImageSchema from "./image.model";
const {Schema} = mongoose;


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "authors",
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 200, // Minimum length of 200 characters
        maxlength: 250 // Maximum length of 250 characters 
    },
    img: {
        type: ImageSchema,
        _id : false,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Major', 'Minor'], 
    },
    tags: {
        type: [String],
        default: ["Technology"],
        required: true
    },
    likes: {
        type: Number,
        default: 0  // Initialize likes with 0
    },
    submajor: [ // update submajor only if type = major
        {
            title: String,
            description: String // if type = major, then there can be multiple els in this submajor array
            //  but if type = minor, there will be only 1 el in the subarray which is the minor content
        }
    ]
});

const Post = mongoose.model("Post", postSchema);

export default Post;