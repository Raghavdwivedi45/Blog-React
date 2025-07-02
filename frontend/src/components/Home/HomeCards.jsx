import { Link } from "react-router-dom";
import "../../css/Home/HomeCards.css";
import { majorStore } from "../../store/majorStore.js";
import { minorStore } from "../../store/minorStore.js";

const HomeCards = ({ info, typeLink }) => {
 let str = ".............................................................................................................................................................................. ......................................................................................................................................................................................................................... ......................................................................................................................................................................................................................... ......................................................................................................................................................................................................................... ....................................................................................................................";
 if (info.length === 0) return null;
 const { setMajorInfo } = majorStore();
 const { setMinorInfo } = minorStore();


 return (
  <>
  <div className="card__container"> {/* Attach the ref here */}
   {
    info.map((post) =>
     { return (
      <article className="card__article" key={post._id || "123"}>
       <div className="card-img">
        {post.img && <img src={post.img} alt="Show More" />}
       </div>
       <div className="card__data">
        <div className="card-up-icon">
         <img src="/assets/dblUpArrow.svg" alt="" />
        </div>
        <div className="card-text">
         <h2 className="card__title">{post.title || "Check out more such..."}</h2>
         <div className="card__description">
          {post.description || str}
         </div>
         <Link to={"/" + typeLink + "/" + post._id}
          className="card__button" style={{textDecoration: "none"}} onClick={() => { if(typeLink==="majors") {setMajorInfo(post)} else { setMinorInfo(post)} }}>
          Continue learning
         </Link>
        </div>
       </div>
      </article> )
     }
    )
   }
  </div>
  </>
 );
}

export default HomeCards;