import "../../css/author/AboutAuthor.css";
import { authorStore } from "../../store/authorStore";

const AuthorInfo = () => {

  const {authorInfo} = authorStore();
  console.log(authorInfo)
  
  return (
    <div className="about-author">
      <img src={authorInfo.img} alt="" />
      <h2>{authorInfo.name}</h2>
      <div className="about-author-desc">{authorInfo.description}</div>
    </div>
  )
}

export default AuthorInfo