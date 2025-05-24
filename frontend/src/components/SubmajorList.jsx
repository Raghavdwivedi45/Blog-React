import "../css/SubmajorList.css";
import { majorStore } from "../store/majorStore";

const SubmajorList = ({fullList}) => {

  const {setSubmajorIdx} = majorStore();

  return (
    <div className="submajor-list-container">
        {
            fullList.map((submajor, idx) => {
                return (
                    <div 
                    className="each-submajor" 
                    onClick={() => { setSubmajorIdx(idx) }}
                    >Chapter {idx+1} : {submajor.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default SubmajorList