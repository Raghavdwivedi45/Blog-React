import { useEffect, useRef, useState } from "react";
import "../../css/Major/Major.css";
import { majorStore } from "../../store/majorStore.js";
import BuyPremium from "./BuyPremium.jsx";
import PostAuthor from "./PostAuthor.jsx";
import PostFilter from "./PostFilter.jsx";
import SubmajorIdx from "./submajorIdx.jsx";

const Major = () => {
  const { majorInfo, submajorIdx, setSubmajorIdx } = majorStore();
  const desc = useRef();
  const [currIdx, setCurrIdx] = useState(submajorIdx);

  useEffect(() => {desc.current.innerHTML = majorInfo.submajor[currIdx].description}, [currIdx])

  const handleSubIdx = (val) => {
    if(currIdx==0 && val==-1) return;
    if(currIdx==majorInfo.submajor.length-1 && val==1) return;
    setCurrIdx(currIdx+val);
  }

  return (
    <div className="major-container">
      <div className="major-buy-premium">
        <BuyPremium/>
      </div>
      
      <div className="major-content">
        <div className="major-content-go-back" onClick={() => { setSubmajorIdx(null); }}><img src="../assets/back-arrow.png" alt="" /></div>
        <div className="major-content-title">{majorInfo.submajor[currIdx].title}</div>

        <div className="major-content-description" ref={desc}></div>

        <div className="major-content-description-navigate-arrows">
          <div className="major-content-go-back" onClick={() => handleSubIdx(-1)}><img src="../assets/back-arrow.png" alt="" /></div>
          <div className="major-content-go-back" onClick={() => handleSubIdx(+1)} id="next-arrow"><img src="../assets/back-arrow.png" alt="" /></div>
        </div>

        <PostFilter tags={majorInfo.tags}/>
      </div>
      
      <div className="major-author">
        <PostAuthor/>
        <SubmajorIdx idxArr={majorInfo.submajor[currIdx].secIds} />
      </div>
    </div>
  )
}

export default Major