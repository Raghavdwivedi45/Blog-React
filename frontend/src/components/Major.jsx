import "../css/Major.css";
import { majorStore } from "../store/majorStore";
import BuyPremium from "./BuyPremium";
import PostAuthor from "./PostAuthor";
import PostFilter from "./postFilter";

const Major = () => {
  const { majorInfo, submajorIdx } = majorStore();
  return (
    <div className="major-container">
      <div className="major-buy-premium">
        <BuyPremium/>
      </div>
      
      <div className="major-content">
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