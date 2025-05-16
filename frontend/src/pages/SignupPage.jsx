import { useState } from "react"
import "../css/SignupPage.css"
import TypeOfUser from "../components/TypeOfUser.jsx";
import { signupStore } from "../store/signupStore.js";
import Login from "../components/Login.jsx";

const SignupPage = () => {
  const {page} = signupStore();
  if(page=="choose") return <TypeOfUser />;
  if(page=="login") return <Login/>
  // if(page=="author")
  // if(page=="user")
  return <div>To Be Continued...</div>;

}

export default SignupPage;