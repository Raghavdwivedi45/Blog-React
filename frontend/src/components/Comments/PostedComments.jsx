import "../../css/PostedComments.css"

const PostedComments = ({ myComment, otherComments }) => {

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
                    <div class="my-post">
                        <div className="my-post-l">
                            <p class="comment-post-text">{myComment[0].body}</p>
                            <span class="comment-post-meta">Posted by @{myComment[0].writer.name} {myComment[0].writerType === "Author" && <span>★</span>} • {formatPrettyDate(myComment[0].createdAt)}</span>
                        </div>

                        <div className="my-post-r">Delete</div>
                    </div>}

                    {
                        otherComments.map((el, i) => {
                            return (
                                <div key={i} class="comment-post">
                                    <p class="comment-post-text">{el.body}</p>
                                    <span class="comment-post-meta">Posted by @{el.writer.name} {el.writerType === "Author" && <span>★</span>} • {formatPrettyDate(el.createdAt)}</span>
                                </div>
                            )
                        })}
                </div>

            </div>
        </>
    )
}

export default PostedComments