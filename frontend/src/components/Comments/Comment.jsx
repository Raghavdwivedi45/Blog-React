import { useRef } from "react";
import "../../css/Comment.css";
import { postComment } from "../../lib/major/helpMajor";

const Comment = ({mjrId, postMyComment}) => {

    const comment = useRef();

    const handlePostComment = () => {
        const msg = comment.current.value;
        postComment(mjrId, msg)
        .then((res) => {
            comment.current.value="";
            const myComm = [{
                "body" : msg,
                "writer" : { "name" : "Myself" },
                "createdAt" : new Date(Date.now())
            }]
            postMyComment([...myComm])
        }) 
        .catch((err) => {console.log("err", err)});
    }

    return (
        <>
            <div className="comment-section">
                <h3>Leave a Comment</h3>
                <textarea placeholder="Write your thoughts here..." ref={comment}></textarea>
                <button onClick={handlePostComment}>Post Comment</button>
            </div>
        </>
    )
}

export default Comment