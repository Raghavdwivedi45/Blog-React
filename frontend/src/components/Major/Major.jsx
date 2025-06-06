import { useEffect, useRef } from "react";
import "../../css/Major/Major.css";
import { majorStore } from "../../store/majorStore.js";
import BuyPremium from "./BuyPremium.jsx";
import PostAuthor from "./PostAuthor.jsx";
import PostFilter from "./postFilter.jsx";
import SubmajorIdx from "./submajorIdx.jsx";

const Major = () => {
  const { majorInfo, submajorIdx, setSubmajorIdx } = majorStore();
  const desc = useRef();

  useEffect(() => {desc.current.innerHTML = majorInfo.submajor[submajorIdx].description}, [])

  return (
    <div className="major-container">
      <div className="major-buy-premium">
        <BuyPremium/>
      </div>
      
      <div className="major-content">
        <div className="major-content-go-back" onClick={() => { setSubmajorIdx(null); }}><img src="../assets/back-arrow.png" alt="" /></div>
        <div className="major-content-title">{majorInfo.submajor[submajorIdx].title}</div>

        <div className="major-content-description" ref={desc}></div>

        <PostFilter tags={majorInfo.tags}/>
      </div>
      
      <div className="major-author">
        <PostAuthor/>
        <SubmajorIdx idxArr={majorInfo.submajor[submajorIdx].secIds} />
      </div>
    </div>
  )
}

export default Major