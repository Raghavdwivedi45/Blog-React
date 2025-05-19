import "../css/HomeCards.css"

const HomeCards = () => {
  return (
         <div class="card__container">
            
            <article class="card__article">

               <div className="card-img">
                <img src="/assets/hero1.png" alt="" />
               </div>
   
               <div class="card__data">

                  <div className="card-up-icon">
                     <img src="/assets/dblUpArrow.svg" alt="" />
                  </div>

                  <h2 class="card__title">Awesome Card 01</h2>
                  
                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <span class="card__button">
                     Continue learning
                  </span>
               
               </div>
            </article>
   
            <article class="card__article card__orange">

               <div className="card-img">
                <img src="/assets/hero2.png" alt="" />
               </div>
   
               <div class="card__data">

                  <div className="card-up-icon">
                     <img src="/assets/dblUpArrow.svg" alt="" />
                  </div>

                  <h2 class="card__title">Awesome Card 01</h2>
                  
                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <span class="card__button">
                     Continue learning
                  </span>
               
               </div>
            </article>
   
            <article class="card__article card__green">

               <div className="card-img">
                <img src="/assets/hero3.png" alt="" />
               </div>
   
               <div class="card__data">

                  <div className="card-up-icon">
                     <img src="/assets/dblUpArrow.svg" alt="" />
                  </div>

                  <h2 class="card__title">Awesome Card 01</h2>
                  
                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <span class="card__button">
                     Continue learning
                  </span>
               
               </div>

            </article>
         </div>
  )
}

export default HomeCards