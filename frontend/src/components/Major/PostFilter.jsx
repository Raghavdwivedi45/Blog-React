import "../../css/Major/PostFilter.css";

const PostFilter = ({tags=[]}) => {
  console.log(tags)
  return (
    <div className="tag-container">
        {
            tags.map((tag, i) => {
                return (
                    <div key={i} className="tag">{tag}</div>
                );
            })
        }
    </div>
  )
}

export default PostFilter