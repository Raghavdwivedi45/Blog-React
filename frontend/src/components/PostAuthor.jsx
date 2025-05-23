import "../css/PostAuthor.css";

const PostAuthor = ({aut}) => {
  const author = {
    name : "Jane Doe",
    img: "../assets/hero1.png"
  }
  return (
    <div className="post-auth-container" >
      
      <div className="post-auth-appearance">
        <img src="../assets/theme.png" alt="" className="post-auth-appearance-img" />
      </div>
      
      <div className="post-auth-2">
        
        <div className="post-auth-image">
          <img src={author.img} alt="" />
        </div>
        
        <div className="post-auth-name">
          <div>{author.name}</div>
          <button className="post-auth-follow-btn">Follow</button>
        </div>

      </div>

    </div>
  )
}

export default PostAuthor