import "../css/HomeCards.css"

const HomeCards = () => {
  return (
         <div class="card__container">
            
            <article class="card__article">
               <div class="card__scale-1"></div>
               <div class="card__scale-2"></div>

               <div className="card-img">
                <img src="/assets/hero1.png" alt="" />
               </div>
   
               <div class="card__data">
                  <h2 class="card__title">Awesome Card 01</h2>
                  
                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <a href="#" class="card__button">
                     Continue learning
                  </a>
               </div>
            </article>
   
            <article class="card__article card__orange">
               <div class="card__scale-1"></div>
               <div class="card__scale-2"></div>

               <div className="card-img">
                <img src="/assets/hero2.png" alt="" />
               </div>
   
               <div class="card__data">
                  <h2 class="card__title">Awesome Card 02</h2>

                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <a href="#" class="card__button">
                     Continue learning
                  </a>
               </div>
            </article>
   
            <article class="card__article card__green">
               <div class="card__scale-1"></div>
               <div class="card__scale-2"></div>

               <div className="card-img">
                <img src="/assets/hero3.png" alt="" />
               </div>
   
               <div class="card__data">
                  <h2 class="card__title">Awesome Card 03</h2>

                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <a href="#" class="card__button">
                     Continue learning
                  </a>
               </div>
            </article>
         </div>
  )
}

export default HomeCards