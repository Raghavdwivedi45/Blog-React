import HomeCards from "../components/HomeCards";
import "../css/MajorPage.css";
import { majorStore } from "../store/majorStore";
import Major from "../components/Major";

const MajorPage = () => {
  const { majorInfo } = majorStore();

  if(majorInfo!=null) return <Major majorInfo={majorInfo} />;
  
  return (
    <div className="major-cards">
        <HomeCards/>
    </div>
  )
}

export default MajorPage