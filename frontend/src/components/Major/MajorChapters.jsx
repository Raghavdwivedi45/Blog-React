import "../../css/Major/MajorChapters.css";
import LikeBar from "./LikeBar.jsx";
import SubmajorList from "./SubmajorList.jsx";
import { navigateStore } from "../../store/navigateStore.js";
import Comment from "../Comments/Comment.jsx";
import PostedComments from "../Comments/PostedComments.jsx";
import { useEffect, useState } from "react";
import { isCommented, MyMajorInfo } from "../../lib/major/helpMajor.js";
import { useParams, useSearchParams } from "react-router-dom";
import Major from "./Major.jsx";

const MajorChapters = () => {
  const {majorId} = useParams();
  const {user, likes, pushLikes} = navigateStore();
  const [myComment, setMyComment] = useState([]);
  const [otherComments, setOtherComments] = useState([]);
  const [majorInfo, setMajorInfo] = useState({"title" : "Loading...", "author" : {"name" : "Loading..."}, "img" : "../../assets/bookk.png", "description" : "Loading...", "likes" : 0, "submajor" : [{"title" : "Loading..."}]});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMajor = async () => {
      const res = await MyMajorInfo(majorId);
      if(res.error) return;
      setMajorInfo(res)
    }
    fetchMajor();
  }, [])

  const fetchComments = async () => {
    const res = await isCommented(majorId);
    const myCommentArr = res.filter((comment) => comment.writer._id == user);
    const otherCommentArr = res.filter((comment) => comment.writer._id !== user);
    setMyComment([...myCommentArr]); setOtherComments([...otherCommentArr]);
  }
  
  if(searchParams.get('sub')) return <Major tags={majorInfo.tags} />

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
          <LikeBar setLikes={pushLikes} likeIds={likes} likeCnt={majorInfo.likes} users={user} majorId={majorId}/>
        </div>
      
      </div>
      
      <div className="major-chap-chapters">
        <SubmajorList fullList={majorInfo.submajor}/>
      </div>

      {
        myComment.length==0 &&
        <div className="comment-section-container" id="comments">
          <Comment user={user} mjrId={majorId} postMyComment={setMyComment}/>
        </div>
      }

      <div className="comment-post-container">
        <PostedComments deleteStateMyComment={setMyComment} myComment={myComment} otherComments={otherComments}/>
      </div>
    
    </div>
  )
}

export default MajorChapters