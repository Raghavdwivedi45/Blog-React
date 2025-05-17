import { useState } from "react"
import "../css/SignupPage.css"
import TypeOfUser from "../components/TypeOfUser.jsx";
import { selectPageStore } from "../store/selectPageStore.js";
import Login from "../components/Login.jsx";

const SignupPage = () => {
  const {page} = selectPageStore();
  if(!page) return <></>;
  if(page=="choose") return <TypeOfUser />;
  return <Login/>

}

export default SignupPage;