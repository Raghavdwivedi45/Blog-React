import "../css/MajorChapters.css";
import LikeBar from "./LikeBar";
import SubmajorList from "./SubmajorList";

const MajorChapters = ({ major }) => {
  console.log(major)
  return (
    <div className="major-chap-container">
      
      <div className="major-chap-info">
        
        <div className="major-chap-info-img">
          <img src={major.img} alt="" />
        </div>
        
        <div className="major-chap-info-desc">
          <h1>{major.title}</h1>
          <h2>{major.author}</h2>
          <div className="major-chap-info-description">{major.description.substring(0,930)}...</div>
          <LikeBar likeCnt={major.likes}/>
        </div>
      
      </div>
      
      <div className="major-chap-chapters">
        <SubmajorList fullList={major.submajors}/>
      </div>
    
    </div>
  )
}

export default MajorChapters