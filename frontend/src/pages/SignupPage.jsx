import "../css/Signup/SignupPage.css"
import TypeOfUser from "../components/Signup/TypeOfUser.jsx";
import { selectPageStore } from "../store/selectSignupType.js";
import Login from "../components/Signup/Login.jsx";

const SignupPage = () => {
  const {signupType} = selectPageStore();

  if(signupType=="choose") return <TypeOfUser />;
  return <Login/>

}

export default SignupPage;