import mongoose from "mongoose";
const {Schema} = mongoose;

const CommentSchema = new Schema({
    writer : {
        type: Schema.Types.ObjectId,
        refPath: "writerType",
        required: true
    },
    writerType: {
        type: String,
        required: true,
        enum: ['Author', 'Reader'], // Restrict to only these models
    },
    body: {
        type: String,
        required: true
    },
    parentId : {
        type: Schema.Types.ObjectId,
        refPath: "posts",
        required: true // id of major or minor
    },
}, { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;