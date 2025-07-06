import { useNavigate, useParams } from "react-router-dom";
import "../../css/Major/SubmajorList.css";

const SubmajorList = ({fullList}) => {
  const navigate = useNavigate();
  const {majorId} = useParams();

  return (
    <div className="submajor-list-container">
        {
            fullList.map((submajor, idx) => {
                return (
                    <div 
                    className="each-submajor" key={idx}
                    onClick={() => { navigate(`/majors/${majorId}?sub=${idx}`) }}
                    >Chapter {idx+1} : {submajor.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default SubmajorList