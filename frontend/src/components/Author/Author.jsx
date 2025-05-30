import "../../css/Author.css";
import AuthorContent from "./AuthorContent";
import AuthorInfo from "./AboutAuthor";

const Author = () => {

  return (
    <div className="author-info-container">
      
      <div className="author-info-content">
        <AuthorContent/>
      </div>
      
      <div className="author-info-info">
        <AuthorInfo/>
      </div>
    
    </div>
  )
}

export default Author