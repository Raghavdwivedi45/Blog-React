import "../../css/Major/Major.css";
import { majorStore } from "../../store/majorStore.js";
import BuyPremium from "./BuyPremium.jsx";
import PostAuthor from "./PostAuthor.jsx";
import PostFilter from "./postFilter.jsx";

const Major = () => {
  const { majorInfo, submajorIdx, setSubmajorIdx } = majorStore();
  return (
    <div className="major-container">
      <div className="major-buy-premium">
        <BuyPremium/>
      </div>
      
      <div className="major-content">
        <div className="major-content-go-back" onClick={() => setSubmajorIdx(null) }><img src="../assets/back-arrow.png" alt="" /></div>
        <div className="major-content-title">{majorInfo.submajors[submajorIdx].title}</div>

        <div className="major-content-description">{majorInfo.submajors[submajorIdx].description}</div>

        <PostFilter tags={majorInfo.tags}/>
      </div>
      
      <div className="major-author">
        <PostAuthor/>
      </div>
    </div>
  )
}

export default Major