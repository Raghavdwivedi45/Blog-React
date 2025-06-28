import "../../css/Major/MajorChapters.css";
import LikeBar from "./LikeBar.jsx";
import SubmajorList from "./SubmajorList.jsx";
import { majorStore } from "../../store/majorStore";
import { navigateStore } from "../../store/navigateStore.js";
import Comment from "../Comments/Comment.jsx";
import PostedComments from "../Comments/PostedComments.jsx";
import { useEffect, useState } from "react";
import { isCommented, MyMajorInfo } from "../../lib/major/helpMajor.js";
import { useParams } from "react-router-dom";
import Major from "./Major.jsx";

const MajorChapters = () => {

  const {majorId} = useParams();

  const { majorInfo, setMajorInfo, submajorIdx } = majorStore();
  const {user, likes, setLikes} = navigateStore();
  const [myComment, setMyComment] = useState([]);
  const [otherComments, setOtherComments] = useState([]);

  useEffect(() => {

    const fetchMajor = async () => {
      const res = await MyMajorInfo(majorId);
      if(res.error) return;
      setMajorInfo(res)
    }

    const fetchComments = async () => {
      const res = await isCommented(majorId);
      const myCommentArr = res.filter((comment) => comment.writer._id == user);
      const otherCommentArr = res.filter((comment) => comment.writer._id !== user);

      setMyComment([...myCommentArr])
      setOtherComments([...otherCommentArr])
    }
    if(!majorInfo) fetchMajor();
    fetchComments();
  }, [])
  
  if(!majorInfo) return "";
  if(submajorIdx || submajorIdx==0) return <Major/>

  return (
    <div className="major-chap-container">
      
      <div className="major-chap-info">
        
        <div className="major-chap-info-img">
          <img src={majorInfo.img} alt="" />
        </div>
        
        <div className="major-chap-info-desc">
          <h1>{majorInfo.title}</h1>
          <h2>{majorInfo.author.name}</h2>
          <div className="major-chap-info-description">{majorInfo.description}...</div>
          <LikeBar setLikeIds={setLikes} likeIds={likes} likeCnt={majorInfo.likes} users={user} majorId={majorId}/>
        </div>
      
      </div>
      
      <div className="major-chap-chapters">
        <SubmajorList fullList={majorInfo.submajor}/>
      </div>

      {
        myComment.length==0 &&
        <div className="comment-section-container" id="comments">
          <Comment mjrId={majorId} postMyComment={setMyComment}/>
        </div>
      }

      <div className="comment-post-container">
        <PostedComments deleteStateMyComment={setMyComment} myComment={myComment} otherComments={otherComments}/>
      </div>
    
    </div>
  )
}

export default MajorChapters