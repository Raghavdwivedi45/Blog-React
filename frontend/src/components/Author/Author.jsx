import "../../css/Author.css";
import AuthorContent from "./AuthorContent";
import AuthorInfo from "./AboutAuthor";
import { authorStore } from "../../store/authorStore";

const Author = () => {

  const {setAuthorInfo} = authorStore();

  return (

    <div className="author-info-container-actual">
      
      <div className="author-content-go-back" onClick={() => setAuthorInfo(null) }><img src="../assets/back-arrow.png" alt="" /></div>
      
      <div className="author-info-container">
        <div className="author-info-content"><AuthorContent /></div>
        <div className="author-info-info"><AuthorInfo /></div>
      </div>

    </div>

  )
}

export default Author