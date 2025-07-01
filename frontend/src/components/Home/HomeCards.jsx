import { Link } from "react-router-dom";
import "../../css/Home/HomeCards.css";
import { majorStore } from "../../store/majorStore.js";
import { minorStore } from "../../store/minorStore.js";

const HomeCards = ({info, typeLink}) => {

   const { setMajorInfo } = majorStore();
   const { setMinorInfo } = minorStore();

  return (
         <div className="card__container">
            
            {
               info.map((post) => 
                  { return (
                     <article className="card__article" key={post._id}>

                        <div className="card-img">
                        <img src={post.img} alt="" />
                        </div>
            
                        <div className="card__data">

                           <div className="card-up-icon">
                              <img src="/assets/dblUpArrow.svg" alt="" />
                           </div>
                           
                           <div className="card-text">
                              <h2 className="card__title">{post.title}</h2>
                              
                              <div className="card__description">
                                 {post.description}
                              </div>

                              <Link to={"/" + typeLink + "/" + post._id} 
                                 className="card__button" onClick={() => { if(typeLink==="majors") {setMajorInfo(post)} else {setMinorInfo(post)} }}>
                                 Continue learning
                              </Link>
                           </div>
                        
                        </div>
                     </article> )
                  }
               )
            }
   
         </div>
  )
}

export default HomeCards;