import "../css/TypeSignup.css";
import { selectPageStore } from "../store/selectPageStore.js";

const TypeOfUser = () => {
    
  const { changePage } = selectPageStore();

  return (
    <section className="sign-choose">
        <h1 className="sign-choose-head">Signup as</h1>

        <div className="sign-btns">
          <button className="sign-btn" onClick={() => changePage("user")}>Reader</button>
          <button className="sign-btn" onClick={() => changePage("author")}>Author</button>
          <p className="sign-already-user">Already a user ? 
            <span onClick={() => changePage("login")}> Login</span> 
          </p>
        </div>
    </section>
  )
}

export default TypeOfUser