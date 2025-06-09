import "../../css/PostedComments.css"

const PostedComments = () => {
    return (
        <>

            <div class="comments-post-display">
                <h3>Comments</h3>

                <div className="all-comments-show">
                    <div class="comment-post">
                        <p class="comment-post-text">This article was super helpful! Thanks 🙌</p>
                        <span class="comment-post-meta">Posted by Raghav • 5 minutes ago</span>
                    </div>

                    <div class="comment-post">
                        <p class="comment-post-text">Could you add more examples on web design?</p>
                        <span class="comment-post-meta">Posted by Anjali • 1 hour ago</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostedComments