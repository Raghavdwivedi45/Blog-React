import { useState } from "react";
import "../css/TypeSignup.css";
import { signupStore } from "../store/signupStore";

const TypeOfUser = () => {
    
  const { changePage } = signupStore();

  return (
    <section className="sign-choose">
        <h1 className="sign-choose-head">Sign in as</h1>

        <div className="sign-btns">
          <button className="sign-btn" onClick={() => changePage("user")}>User</button>
          <button className="sign-btn" onClick={() => changePage("author")}>Author</button>
        </div>
    </section>
  )
}

export default TypeOfUser