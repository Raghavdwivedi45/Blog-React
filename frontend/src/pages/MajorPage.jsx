import HomeCards from "../components/HomeCards";
import "../css/MajorPage.css";
import { majorStore } from "../store/majorStore";
import Major from "../components/Major";

const MajorPage = () => {
  const { majorId } = majorStore();
  if(majorId!=null) return <Major majorId={majorId} />;
  
  return (
    <div className="major-minor-cards">
        <HomeCards/>
        <HomeCards/>
    </div>
  )
}

export default MajorPage