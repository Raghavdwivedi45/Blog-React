import { Link } from "react-router-dom";
import "../../css/Home/HomeCards.css";

const HomeCards = ({ info = [], typeLink }) => {
    let str = ".............................................................................................................................................................................. ......................................................................................................................................................................................................................... ......................................................................................................................................................................................................................... ......................................................................................................................................................................................................................... ....................................................................................................................";

    return (
        <>
            <div className="card__container">
                {
                    info.map((post) => {
                        return (
                            <article className="card__article" key={post._id || Math.trunc(Math.random()*10)}>
                                <div className="card-img">
                                    {post.img && <img src={post.img} alt="Show More" />}
                                </div>
                                <div className="card__data">
                                    <div className="card-up-icon">
                                        <img src="/assets/dblUpArrow.svg" alt="" />
                                    </div>
                                    <div className="card-text">
                                        <h2 className="card__title">{post.title || "Check out more such posts"}</h2>
                                        <div className="card__description">
                                            {post.description || str}
                                        </div>
                                        <Link to={"/" + typeLink + "/" + post._id}
                                            className="card__button" style={{ textDecoration: "none" }}>
                                            Continue learning
                                        </Link>
                                    </div>
                                </div>
                            </article>)
                    }
                    )
                }
            </div>
        </>
    );
}

export default HomeCards;