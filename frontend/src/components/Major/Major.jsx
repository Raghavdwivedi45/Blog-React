import { useEffect, useRef, useState } from "react";
import "../../css/Major/Major.css";
import BuyPremium from "./BuyPremium.jsx";
import PostAuthor from "./PostAuthor.jsx";
import PostFilter from "./PostFilter.jsx";
import SubmajorIdx from "./SubmajorIdx.jsx";
import { getSubmajor } from "../../lib/major/helpMajor.js";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Major = ({tags}) => {
  const desc = useRef(); const moveBtn = useRef();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {majorId} = useParams();
  const [submajor, setSubmajor] = useState({"title" : "Loading...", "description" : "Loading...", "secIds" : [], })


  useEffect(() => {
    const fetchSubmajor = async () => {
      const result = await getSubmajor(majorId, searchParams.get("sub"))
      if(result.error) {
        setSubmajor((prev) => { return {...prev, "title" : "Error", "description" : result.error } });
        moveBtn.current.style.display = 'none';
      }
      else setSubmajor(result)
    }
    fetchSubmajor()
  }, [searchParams.get("sub")])

  useEffect(() => {
    if(submajor.description && desc) {
      let str = "";
      for(const s of submajor.description) str+= s;
      desc.current.innerHTML = str || "";
    }
  }, [submajor])

  return (
    <div className="major-container">
      <div className="major-buy-premium">
        <BuyPremium/>
      </div>
      
      <div className="major-content">
        <div className="major-content-go-back" onClick={() => { navigate(`/majors/${majorId}`) }}><img src="../assets/back-arrow.png" alt="" /></div>
        <div className="major-content-title">{submajor.title}</div>

        <div className="major-content-description" ref={desc}></div>

        <div className="major-content-description-navigate-arrows" ref={moveBtn}>
          <div className="major-content-go-back" onClick={() => { navigate(`/majors/${majorId}?sub=${Number(searchParams.get("sub")) - 1}`) }}><img src="../assets/back-arrow.png" alt="" /></div>
          <div className="major-content-go-back" onClick={() => { navigate(`/majors/${majorId}?sub=${Number(searchParams.get("sub")) + 1}`) }} id="next-arrow"><img src="../assets/back-arrow.png" alt="" /></div>
        </div>

        <PostFilter tags={tags}/>
      </div>
      
      <div className="major-author">
        <PostAuthor/>
        <SubmajorIdx idxArr={submajor.secIds} />
      </div>
    </div>
  )
}

export default Major