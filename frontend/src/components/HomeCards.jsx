import "../css/HomeCards.css"
import { majorStore } from "../store/majorStore";
import { navigateStore } from "../store/navigateStore.js";

const HomeCards = () => {

   const { setMajorInfo } = majorStore();
   const { changePage } = navigateStore();

   const info = [
      {
         _id: "123",
         title : "Awesome Card 01",
         author: "Jane Smith",
         description: `Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool lookGradient card, with bright edges 
                        that gives it a cool look.Gradientcard,withbrightedges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look.`,
         img: "/assets/hero1.png",
         type: "",
         tags: ["technology", "technology", "technology", "technology"],
         likes: 0,
         submajors: [
            {
               title: "Awesome Card 01",
               description: "technology technology technology technology"

            },
            {
               title: "Awesome Card 01",
               description: "technology technology technology technology"

            },
         ]
      },

      {
         _id: "789",
         title : "Awesome Card 01",
         author: "Jane Smith",
         description: `Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool lookGradient card, with bright edges 
                        that gives it a cool look.Gradientcard,withbrightedges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look.`,
         img: "/assets/hero1.png",
         type: "",
         tags: ["technology", "technology", "technology", "technology"],
         likes: 0,
         submajors: [
            {
               title: "Awesome Card 01",
               description: "technology technology technology technology"

            },
            {
               title: "Awesome Card 01",
               description: "technology technology technology technology"

            },
         ]
      },
      
      {
         _id: "456",
         title : "Awesome Card 01",
         author: "Jane Smith",
         description: `Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool lookGradient card, with bright edges 
                        that gives it a cool look.Gradientcard,withbrightedges 
                        that gives it a cool look. Gradient card, with bright edges 
                        that gives it a cool look.`,
         img: "/assets/hero1.png",
         type: "",
         tags: ["technology", "technology", "technology", "technology"],
         likes: 0,
         submajors: [
            {
               title: "Awesome Card 01",
               description: "technology technology technology technology"

            },
            {
               title: "Awesome Card 01",
               description: "technology technology technology technology"

            },
         ]
      }
   ];

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