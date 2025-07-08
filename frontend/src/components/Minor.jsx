import { useEffect, useRef, useState } from "react";
import "../css/Major/Major.css";
import BuyPremium from "./Major/BuyPremium.jsx";
import PostAuthor from "./Major/PostAuthor.jsx";
import PostFilter from "./Major/PostFilter.jsx";
import SubmajorIdx from "./Major/SubmajorIdx.jsx";
import Comment from "./Comments/Comment.jsx";
import PostedComments from "./Comments/PostedComments.jsx";
import LikeBar from "./Major/LikeBar.jsx";
import { navigateStore } from "../store/navigateStore.js";
import { useParams } from "react-router-dom";
import { isCommented, MyMinorInfo } from "../lib/major/helpMajor.js";


const Minor = () => {
    const desc = useRef();
    const { minorId } = useParams()
    const { user, likes, pushLikes } = navigateStore();
    const [myComment, setMyComment] = useState([]);
    const [otherComments, setOtherComments] = useState([]);
    const [minorInfo, setMinorInfo] = useState({"submajor" : [{"title" : "Loading...", "description" : "Loading...", "secIds" : [], }]});

    useEffect(() => {
        const fetchMinor = async () => {
            const res = await MyMinorInfo(minorId);
            if (res.error) return;
            setMinorInfo(res)
        }

        const fetchComments = async () => {
            const res = await isCommented(minorId);
            const myCommentArr = res.filter((comment) => comment.writer._id == user);
            const otherCommentArr = res.filter((comment) => comment.writer._id !== user);

            setMyComment([...myCommentArr])
            setOtherComments([...otherCommentArr])
        }
        fetchMinor();
        fetchComments();
    }, [])

    useEffect(() => {
        if(minorInfo && desc) {
            let str = "";
            for(const s of minorInfo.submajor[0].description) str+= s;
            desc.current.innerHTML = str || "";
        }
    }, [minorInfo])

    return (
        <div className="bind-all-containers">

            <div className="major-container">
                <div className="major-buy-premium">
                    <BuyPremium />
                </div>

                <div className="major-content">
                    <div className="major-content-title">{minorInfo.submajor[0]?.title || "Title"}</div>
                    <div className="major-content-description" ref={desc}></div>

                    <PostFilter tags={minorInfo.tags || []} />
                </div>

                <div className="major-author">
                    <PostAuthor />
                    <SubmajorIdx idxArr={minorInfo.submajor[0]?.secIds || []} />
                    <LikeBar setLikes={pushLikes} likeIds={likes} likeCnt={minorInfo.likes} users={user} majorId={minorId} />

                </div>

            </div>


            {
                myComment.length == 0 &&
                <div className="comment-section-container" id="comments">
                    <Comment user={user} mjrId={minorId} postMyComment={setMyComment} />
                </div>
            }

            <div className="comment-post-container">
                <PostedComments deleteStateMyComment={setMyComment} myComment={myComment} otherComments={otherComments} />
            </div>
        </div>
    )
}

export default Minor;