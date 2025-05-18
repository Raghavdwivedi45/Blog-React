import { useState } from "react"
import "../css/SignupPage.css"
import TypeOfUser from "../components/TypeOfUser.jsx";
import { selectPageStore } from "../store/selectSignupType.js";
import Login from "../components/Login.jsx";

const SignupPage = () => {
  const {signupType} = selectPageStore();

  if(signupType=="choose") return <TypeOfUser />;
  return <Login/>

}

export default SignupPage;