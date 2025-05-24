import "../css/Major.css";
import BuyPremium from "./BuyPremium";
import PostAuthor from "./PostAuthor";
import PostFilter from "./postFilter";

const Major = ({ majorInfo }) => {
  return (
    <div className="major-container">
      <div className="major-buy-premium">
        <BuyPremium/>
      </div>
      
      <div className="major-content">
        <div className="major-content-title">{majorInfo.title}</div>

        <div className="major-content-description">{majorInfo.description}</div>

        <PostFilter tags={majorInfo.tags}/>
      </div>
      
      <div className="major-author">
        <PostAuthor/>
      </div>
    </div>
  )
}

export default Major