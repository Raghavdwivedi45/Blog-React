import HomeCards from "../components/HomeCards";
import "../css/MajorPage.css";
import { majorStore } from "../store/majorStore";
import Major from "../components/Major";
import MajorChapters from "../components/MajorChapters";

const MajorPage = () => {
  const { majorInfo, submajorIdx } = majorStore();

  if(submajorIdx!=null) return <Major />;
  if(majorInfo!=null) return <MajorChapters major={majorInfo}/>

  return (
    <div className="major-cards">
        <HomeCards/>
    </div>
  )
}

export default MajorPage