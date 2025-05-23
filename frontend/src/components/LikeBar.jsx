import { useRef, useState } from "react"
import "../css/LikeBar.css"

const LikeBar = ({likeCnt}) => {

  const like = useRef();
  const [totalLikes, setTotalLikes] = useState(likeCnt);

  const handleLikes = () => {
      const curr = like.current.style.backgroundColor;
      like.current.style.backgroundColor= curr ? "" : "rgb(51, 150, 207)";
      // increase total likes in the frontend
      if(!curr) setTotalLikes((totalLikes) => totalLikes+1)
      else setTotalLikes((totalLikes) => totalLikes-1)
  }

  return (
    <div className="like-bar-container">
        
        <div className="like-bar-container-l" ref={like} onClick={() => handleLikes()}>
            <img src="../assets/like.png" alt="" />
            <div>{totalLikes}</div>     
        </div>

        <div className="like-bar-container-r">
            <img src="../assets/comment.png" alt="" />
        </div>
        
    </div>
  )
}

export default LikeBar