import "../../css/author/Author.css";
import AuthorContent from "./AuthorContent.jsx";
import AuthorInfo from "./AboutAuthor";
import { authorStore } from "../../store/authorStore";
import { navigateStore } from "../../store/navigateStore";
import { useEffect } from "react";
import { getMyAuthor } from "../../lib/author/authorHelp.js";
import { useParams } from "react-router-dom";

const Author = () => {


  const {authorInfo, setAuthorInfo} = authorStore();
  const {changePage, user} = navigateStore();
  const {authorId} = useParams();


    useEffect(() => {
      const getAuthor = async () => {
        const auth = await getMyAuthor(authorId);
        if(auth.data?.error) return; 
        setAuthorInfo(auth.data);
      }
      if(!authorInfo) getAuthor();
    }, []);

  if(!authorInfo) return "";

  return (

    <div className="author-info-container-actual">
      
      {
      (user && user==authorInfo._id) 
      && 
      <div className="author-info-cont-create-btns">
          <button onClick={() => changePage("create-majors")}>New Major</button>
          <button onClick={() => changePage("create-minors")}>New Minor</button>
      </div>
      }

      <div className="author-info-container">
        <div className="author-info-content"><AuthorContent id={authorInfo._id} /></div>
        <div className="author-info-info"><AuthorInfo /></div>
      </div>

    </div>

  )
}

export default Author