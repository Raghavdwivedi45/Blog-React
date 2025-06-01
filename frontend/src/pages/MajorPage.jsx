import HomeCards from "../components/Home/HomeCards";
import "../css/Major/MajorPage.css";
import { majorStore } from "../store/majorStore";
import Major from "../components/Major/Major.jsx";
import MajorChapters from "../components/Major/MajorChapters.jsx";
import { getAllMajors } from "../lib/major/helpMajor.js";
import { useState } from "react";

const MajorPage = () => {
  const { majorInfo, submajorIdx } = majorStore();

  if(submajorIdx!=null) return <Major />;
  if(majorInfo!=null) return <MajorChapters major={majorInfo}/>

  const [majors, setMajors] = useState([]);

  const getMajors = async () => {
    const result = await getAllMajors();
    if(result.data?.error) return; 
    setMajors(result.data);
  }
  getMajors();

  return (
    <div className="major-cards">
        <HomeCards info={majors}/>
    </div>
  )
}

export default MajorPage