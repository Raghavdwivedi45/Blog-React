import "../css/MajorChapters.css";
import LikeBar from "./LikeBar";
import SubmajorList from "./SubmajorList";
import { majorStore } from "../store/majorStore";

const MajorChapters = () => {

  const { majorInfo, setMajorInfo } = majorStore();

  return (
    <div className="major-chap-container">
      
      <div className="major-chap-info">
        
        <div className="major-chap-info-img">
          <img src={majorInfo.img} alt="" />
        </div>
        
        <div className="major-chap-info-desc">
          <h1>{majorInfo.title}</h1>
          <h2>{majorInfo.author}</h2>
          <div className="major-chap-info-description">{majorInfo.description.substring(0,930)}...</div>
          <LikeBar likeCnt={majorInfo.likes}/>
        </div>
      
      </div>

      <div className="major-chap-go-back" onClick={() => setMajorInfo(null) }><img src="../assets/back-arrow.png" alt="" /></div>
      
      <div className="major-chap-chapters">
        <SubmajorList fullList={majorInfo.submajors}/>
      </div>
    
    </div>
  )
}

export default MajorChapters