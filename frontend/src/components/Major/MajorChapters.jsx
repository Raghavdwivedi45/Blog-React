import "../../css/Major/MajorChapters.css";
import LikeBar from "./LikeBar.jsx";
import SubmajorList from "./SubmajorList.jsx";
import { majorStore } from "../../store/majorStore";
import { navigateStore } from "../../store/navigateStore.js";
import Comment from "../Comments/Comment.jsx";
import PostedComments from "../Comments/PostedComments.jsx";
import { useEffect } from "react";
import { isLikedAndCommented } from "../../lib/major/helpMajor.js";

const MajorChapters = () => {

  const { majorInfo, setMajorInfo } = majorStore();
  const {popPage, user, likes} = navigateStore();

  useEffect(() => {
    const fetchComments = async () => {
      const res = isLikedAndCommented(user || "ABCD", majorInfo._id);
      console.log(likes);
    }
    if(user) fetchComments();
  }, [])

  return (
    <div className="major-chap-container">
      
      <div className="major-chap-info">
        
        <div className="major-chap-info-img">
          <img src={majorInfo.img} alt="" />
        </div>
        
        <div className="major-chap-info-desc">
          <h1>{majorInfo.title}</h1>
          <h2>{majorInfo.author.name}</h2>
          <div className="major-chap-info-description">{majorInfo.description.substring(0,930)}...</div>
          <LikeBar likeCnt={majorInfo.likes} users={user}/>
        </div>
      
      </div>

      <div className="major-chap-go-back" onClick={() => { setMajorInfo(null); popPage(); } }><img src="../assets/back-arrow.png" alt="" /></div>
      
      <div className="major-chap-chapters">
        <SubmajorList fullList={majorInfo.submajor}/>
      </div>

      <div class="comment-section-container">
        <Comment mjrId={majorInfo._id}/>
      </div>

      <div class="comment-post-container">
        <PostedComments/>
      </div>
    
    </div>
  )
}

export default MajorChapters