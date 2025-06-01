import "../../css/Home/HomeCards.css";
import { majorStore } from "../../store/majorStore.js";
import { navigateStore } from "../../store/navigateStore.js";

const HomeCards = ({info}) => {

   const { setMajorInfo } = majorStore();
   const { changePage } = navigateStore();

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

                              <div className="card__button" onClick={() => {changePage("majors"); setMajorInfo(post)}}>
                                 Continue learning
                              </div>
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