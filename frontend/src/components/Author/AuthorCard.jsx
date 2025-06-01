import "../../css/author/AuthorCard.css";
import { authorStore } from "../../store/authorStore";

const AuthorCard = ({info}) => {

    const { setAuthorInfo } = authorStore();

    return (
        <div className="author">
            <div className="author-img">
                <img src={info.img} alt="Image not valid" />
            </div>

            <div className="author-bottom">
                <div className="author-name">{info.name}</div>

                <div className="author-links">
                    <span className="author-link-icon">
                        <i className="fa-brands fa-facebook" style={{ color: "#c6d4eee3", fontSize: "2.2rem" }}></i>
                    </span>
                    <span className="author-link-icon">
                        <i className="fa-brands fa-instagram" style={{ backgroundColor: "#cf215b", color: "white", padding: "0.4rem" }}></i>
                    </span>
                    <span className="author-link-icon">
                        <i className="fa-brands fa-youtube" style={{ backgroundColor: "#ff0000", color: "white", fontize: "1.6rem", padding: "0.4rem" }}></i>
                    </span>
                    <span className="author-link-icon">
                        <i className="fa-brands fa-x-twitter" style={{ backgroundColor: "#000000", color: "white", fontSize: "1.6rem", padding: "0.4rem" }}></i>
                    </span>
                </div>

                <div><button className="author-btn" onClick={() => setAuthorInfo(info) }>Know More</button></div>
            </div>

        </div>
    );
};

export default AuthorCard;