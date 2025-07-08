import "../css/Major/MajorPage.css";
import { useParams, useSearchParams } from "react-router-dom";
import HomeCards from "../components/Home/HomeCards";
import { getAllMajors } from "../lib/major/helpMajor.js";
import { useEffect, useState } from "react";
import Filters from "../components/Major/Filters.jsx";

const MajorPage = () => {
  const [posts, setPosts] = useState([]);
  const {postType} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("filter"))

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
      <Filters typeLink="majors"/>
      <HomeCards info={posts} typeLink={postType} />
    </div>
  )
}

export default MajorPage