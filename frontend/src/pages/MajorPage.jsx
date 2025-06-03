import HomeCards from "../components/Home/HomeCards";
import "../css/Major/MajorPage.css";
import { majorStore } from "../store/majorStore";
import Major from "../components/Major/Major.jsx";
import MajorChapters from "../components/Major/MajorChapters.jsx";
import { getAllMajors } from "../lib/major/helpMajor.js";
import { useEffect, useState } from "react";

const MajorPage = () => {
  const { majorInfo, submajorIdx } = majorStore();
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

  if (submajorIdx != null) return <Major />;
  if (majorInfo != null) return <MajorChapters major={majorInfo} />

  return (
    <div className="major-cards">
      <HomeCards info={majors} />
    </div>
  )
}

export default MajorPage