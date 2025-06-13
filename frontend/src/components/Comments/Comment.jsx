import { useRef } from "react";
import "../../css/Comment.css";
import { postComment } from "../../lib/major/helpMajor";

const Comment = ({mjrId}) => {

    const comment = useRef();

    const handlePostComment = () => {
        const msg = comment.current.value;
        postComment(mjrId, msg)
        .then((res) => {console.log(res); comment.current.value="";}) 
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