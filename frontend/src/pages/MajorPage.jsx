import HomeCards from "../components/Home/HomeCards";
import "../css/Major/MajorPage.css";
import { getAllMajors } from "../lib/major/helpMajor.js";
import { useEffect, useState } from "react";

const MajorPage = () => {
  const [majors, setMajors] = useState([]);

  useEffect(() => {
    const getMajors = async () => {
      const result = await getAllMajors();
      if (result.data?.error) return;
      setMajors(result.data);
    }
    getMajors();
    return () => { };
  }, [])

  return (
    <div className="major-cards">
      <HomeCards info={majors} typeLink="majors" />
    </div>
  )
}

export default MajorPage