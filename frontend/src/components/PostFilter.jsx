import "../css/PostFilter.css";

const PostFilter = ({tags}) => {
  return (
    <div className="tag-container">
        {
            tags.map((tag) => {
                return (
                    <div className="tag">{tag}</div>
                );
            })
        }
    </div>
  )
}

export default PostFilter