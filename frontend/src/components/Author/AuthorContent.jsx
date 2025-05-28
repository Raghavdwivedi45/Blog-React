import "../../css/author/AuthorContent.css";

const AuthorContent = () => {

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
    <div className="auth-cont-container">
        {
            info.map((post, idx) => {
                return (
                    <div className="post">
                        <div className="post-info">
                            <div className="post-info-img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="post-info-info">

                            </div>
                        </div>

                        <div className="post-btns"></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AuthorContent