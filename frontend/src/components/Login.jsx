import "../css/Login.css"
import { selectPageStore } from "../store/selectSignupType.js"
import { navigateStore } from "../store/navigateStore.js"
import { handleSignupLoginFormSubmit, validateFormData } from "../lib/helper.js";
import { useActionState, useState, useEffect } from "react";

const UserSignup = () => {

  const handleFormSubmit = async (previousData, formData) => {
    let myData = {
      name: formData.get("name"),
      password: formData.get("password"),
      email : signupType!=="login" ? formData.get("email") : null,
      dob: signupType=="author" ? formData.get("dob") : null,
      description: signupType=="author" ? formData.get("description") : null,
    }
    let err = validateFormData(myData, signupType);
    if(err.error)  { 
      setFormError(err.error); 
      setTimeout(() => {setFormError(null)}, 3000);
      return; 
    } 
    
    const res =  await handleSignupLoginFormSubmit(signupType, myData);
    err = res.error?.response?.data?.error;
    if(err) setFormError(err);
    setUser(res._id); changePage("home")
    
    setTimeout(() => {setFormError(null)}, 3000);
  }

  const {signupType, changeSignupType} = selectPageStore();
  const {user, setUser, changePage } = navigateStore();
  const [data, action, pending] = useActionState(handleFormSubmit, undefined);
  const [formError, setFormError] = useState(null);

  return (
    <section className="user-sign-login-box">
      {signupType=="login" ? <h2>Login</h2> : <h2>Signup</h2>}
      
      <form action={action}>
        
        <div className="user-sign-input-box">
          <input type="text" name="name"  />
          <label>Name</label>
        </div>

        {
        signupType!="login" && <div className="user-sign-input-box">
          <input type="email" name="email"  />
          <label>Email</label>
        </div>
        }

        <div className="user-sign-input-box">
          <input type="password" name="password"  />
          <label>Password</label>
        </div>

        {signupType=="author" && 
        <div className="user-sign-input-box">
          <input type="date" name="dob"  />
          <label>Date of Birth</label>
        </div>}

        {signupType=="author" && <div className="user-sign-input-box">
          <textarea name="description" placeholder="Describe yourself in 100-150 words" rows={12}  />
          <label>Description</label>
        </div>}

        {
        signupType=="login" && <div className="user-sign-options">
          <span>Forgot Password?</span>
        </div>
        }

        <button 
        className="user-sign-btn" 
        disabled={pending}
        >
        {signupType=="login" ? "Login" : "Signup"}
        </button>

        {signupType=="login" && 
        <div className="login-type">
          <input type="radio" name="type"  />
          <label>Login as author</label>
        </div>
        }

        {signupType=="login" ? 
          <p className="user-sign-register-link">
            Don’t have an account? <span onClick={() => changeSignupType("choose")}>Register</span>
          </p> 
          :
          <p className="user-sign-register-link">
            Already a user ? <span onClick={() => changeSignupType("login")}>Login</span> 
          </p>
        }
      
      </form>

        {
          formError && 
          <div className="user-signup-form-error">
            <img height={20} width={20} src="../../assets/cross.png" alt="" />&nbsp; {formError}
          </div>
        }
    </section>
  )
}

export default UserSignup
