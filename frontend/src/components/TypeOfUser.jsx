import "../css/TypeSignup.css";
import { selectPageStore } from "../store/selectSignupType.js";

const TypeOfUser = () => {
    
  const { changeSignupType } = selectPageStore();

  return (
    <section className="sign-choose">
        <h1 className="sign-choose-head">Signup as</h1>

        <div className="sign-btns">
          <button className="sign-btn" onClick={() => changeSignupType("user")}>Reader</button>
          <button className="sign-btn" onClick={() => changeSignupType("author")}>Author</button>
          <p className="sign-already-user">Already a user ? 
            <span onClick={() => changeSignupType("login")}> Login</span> 
          </p>
        </div>
    </section>
  )
}

export default TypeOfUser