import "../../css/author/Author.css";
import AuthorContent from "./AuthorContent.jsx";
import AuthorInfo from "./AboutAuthor";
import { authorStore } from "../../store/authorStore";
import { navigateStore } from "../../store/navigateStore";

const Author = () => {


  const {authorInfo, setAuthorInfo} = authorStore();
  const {changePage, user} = navigateStore();

  console.log(user)

  return (

    <div className="author-info-container-actual">
      
      <div className="author-content-go-back" onClick={() => setAuthorInfo(null) }><img src="../assets/back-arrow.png" alt="" /></div>
      
      {(user && user==authorInfo._id) && <div className="author-info-cont-create-btns">
          <button onClick={() => changePage("create-majors")}>New Major</button>
          <button onClick={() => changePage("create-minors")}>New Minor</button>
      </div>}

      <div className="author-info-container">
        <div className="author-info-content"><AuthorContent id={authorInfo._id} /></div>
        <div className="author-info-info"><AuthorInfo /></div>
      </div>

    </div>

  )
}

export default Author