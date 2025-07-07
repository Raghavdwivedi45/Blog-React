import "../css/Major/MajorPage.css";
import { useParams } from "react-router-dom";
import HomeCards from "../components/Home/HomeCards";
import { getAllMajors } from "../lib/major/helpMajor.js";
import { useEffect, useState } from "react";

const MajorPage = () => {
  const [posts, setPosts] = useState([]);
  const {postType} = useParams();

  if(postType!=="majors" && postType!=="minors" || !posts) return "";
  
  useEffect(() => {
    const getPosts = async () => {
      const result = await getAllMajors(postType);
      if (result.error) return;
      setPosts(result);
    }
    getPosts();
    return () => { };
  }, [postType])


  return (
    <div className="major-cards">
      <HomeCards info={posts} typeLink={postType} />
    </div>
  )
}

export default MajorPage