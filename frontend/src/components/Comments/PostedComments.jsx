import { useRef } from "react";
import "../../css/PostedComments.css"
import { deleteMyComment } from "../../lib/major/helpMajor";

const PostedComments = ({ myComment, otherComments, deleteStateMyComment }) => {

    const deleteComment = async () => {
        deleteStateMyComment([])
        await deleteMyComment(myComment[0]._id);
    }

    function formatPrettyDate(dateStr) {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    return (
        <>
            <div key={0} class="comments-post-display">
                <h3>Comments</h3>
                
                <div className="all-comments-show">
                    
                    {
                    myComment.length>0 && 
                    <div className="my-post">
                        <div className="my-post-l">
                            <p className="comment-post-text">{myComment[0].body}</p>
                            <span className="comment-post-meta">Posted by @{myComment[0].writer.name} {myComment[0].writerType === "Author" && <span>★</span>} • {formatPrettyDate(myComment[0].createdAt)}</span>
                        </div>

                        <div className="my-post-r" onClick={deleteComment}>Delete</div>
                    </div>
                    }

                    {
                        otherComments.map((el, i) => {
                            return (
                                <div key={i} className="comment-post">
                                    <p className="comment-post-text">{el.body}</p>
                                    <span className="comment-post-meta">Posted by @{el.writer.name} {el.writerType === "Author" && <span>★</span>} • {formatPrettyDate(el.createdAt)}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default PostedComments