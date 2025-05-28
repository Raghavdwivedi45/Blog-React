import "../../css/Author.css";
import { authorStore } from "../../store/authorStore"
import AuthorContent from "./AuthorContent";

const Author = () => {

  const {authorInfo} = authorStore();
  return (
    <div className="author-info-container">
      
      <div className="author-info-content">
        <AuthorContent/>
      </div>
      
      <div className="author-info-info">

      </div>
    
    </div>
  )
}

export default Author