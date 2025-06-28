import { useEffect, useRef, useState } from "react"
import "../../css/Major/LikeBar.css"
import { likeInc } from "../../lib/major/helpMajor";

const LikeBar = ({likeCnt, users, likeIds, setLikeIds, majorId}) => {
  const like = useRef();
  const [totalLikes, setTotalLikes] = useState(likeCnt);
  const [clickedLike, setClickedLike] = useState(false);
  const [likesIds, setLikesIds] = useState(likeIds) 

  const handleLikes = async () => {
    if(!users) {
      setClickedLike(true);
      setTimeout(() => setClickedLike(false), 3000); 
      return;
    }
    const curr = like.current.style.backgroundColor;
    like.current.style.backgroundColor= curr ? "" : "rgb(51, 150, 207)";
    let likes = null;
    console.log(likeIds)
    console.log(likesIds)

    if(!curr) {
      setTotalLikes((totalLikes) => totalLikes+1);
      like.current.style.pointerEvents = 'none';
      likes = await likeInc(majorId, 1);
      const newLike = likesIds.push(majorId)
      setLikesIds([...newLike])
      setLikeIds([...newLike])
    }
    else {
      setTotalLikes((totalLikes) => totalLikes-1);
      likes = await likeInc(majorId, -1);
      const newLike = setLikesIds.filter((el) => el!==majorId)
      setLikesIds([...newLike])
      setLikeIds([...newLike])
    }
  }

  useEffect(() => {
    if(likesIds && likesIds.includes(majorId)) {
      like.current.style.pointerEvents = 'none';
      like.current.style.backgroundColor= "rgb(51, 150, 207)";
    }
  }, [])

  return (
    <div className="like-bar-container">
        
        <div className={clickedLike ? "like-bar-container-l show-msg" : "like-bar-container-l"} ref={like} onClick={() => handleLikes()}>
            <img src="../assets/like.png" alt="" />
            <div>&nbsp;{totalLikes}</div>     
        </div>

        <a href="#comments">
          <div className="like-bar-container-r">
              <img src="../assets/comment.png" alt="" />
          </div>
        </a>
        
    </div>
  )
}

export default LikeBar