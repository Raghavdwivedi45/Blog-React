import "../css/Login.css"
import { selectPageStore } from "../store/selectPageStore.js"
import { handleSignupLoginFormSubmit } from "../lib/helper.js";
import { useActionState, useState, useEffect } from "react";

const UserSignup = () => {
  const handleFormSubmit = async (previousData, formData) => {
    console.log("Hello from handleFormSubmit")
    const res =  handleSignupLoginFormSubmit(page, formData);
    setIsVisible(true);
    return res;
  }

  const {page, changePage} = selectPageStore();
  const [data, action, pending] = useActionState(handleFormSubmit, undefined);
  const [isVisible, setIsVisible] = useState(null)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [isVisible]);

  return (
    <section className="user-sign-login-box">
      {page=="login" ? <h2>Login</h2> : <h2>Signup</h2>}
      
      <form action={action}>
        
        <div className="user-sign-input-box">
          <input type="text" name="name"  />
          <label>Name</label>
        </div>

        {
        page!="login" && <div className="user-sign-input-box">
          <input type="email" name="email"  />
          <label>Email</label>
        </div>
        }

        <div className="user-sign-input-box">
          <input type="password" name="password"  />
          <label>Password</label>
        </div>

        {page=="author" && <div className="user-sign-input-box">
          <input type="date" name="dob"  />
          <label>Date of Birth</label>
        </div>}

        {page=="author" && <div className="user-sign-input-box">
          <textarea name="description" placeholder="Describe yourself in 100-150 words" rows={12}  />
          <label>Description</label>
        </div>}

        {
        page=="login" && <div className="user-sign-options">
          <span>Forgot Password?</span>
        </div>
        }

        <button 
        className="user-sign-btn" 
        disabled={pending}
        >
        {page=="login" ? "Login" : "Signup"}
        </button>


        {page=="login" ? 
          <p className="user-sign-register-link">
            Don’t have an account? <span onClick={() => changePage("choose")}>Register</span>
          </p> 
          :
          <p className="user-sign-register-link">
            Already a user ? <span onClick={() => changePage("login")}>Login</span> 
          </p>
        }
      
      </form>

        {
          data?.error && 
          isVisible && 
          <div className="user-signup-form-error">
            <img height={20} width={20} src="../../public/assets/cross.png" alt="" />&nbsp; {data.error}
          </div>
        }
        {
          data?.message && isVisible && <div className="user-signup-form-error">{data.message}</div>
        }
    </section>
  )
}

export default UserSignup
