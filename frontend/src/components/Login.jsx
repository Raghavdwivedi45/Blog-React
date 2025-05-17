import "../css/Login.css"
import { selectPageStore } from "../store/selectPageStore.js"

const UserSignup = () => {
  const {page, changePage} = selectPageStore();
  return (
    <section className="user-sign-login-box">
      {page=="login" ? <h2>Login</h2> : <h2>Signup</h2>}
      
      <form>
        
        <div className="user-sign-input-box">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div className="user-sign-input-box">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="user-sign-input-box">
          <input type="password" required />
          <label>Password</label>
        </div>

        {page=="author" && <div className="user-sign-input-box">
          <input type="date" />
          <label>Date of Birth</label>
        </div>}

        <div className="user-sign-options">
          <span href="#">Forgot Password?</span>
        </div>

        <button type="submit" className="user-sign-btn">{page=="login" ? "Login" : "Signup"}</button>

        {page=="login" ? 
          <p className="user-sign-register-link">
            Don’t have an account? <span href="/" onClick={() => changePage("choose")}>Register</span>
          </p> 
          :
          <p className="user-sign-register-link">
            Already a user ? <span onClick={() => changePage("login")}> Login</span> 
          </p>
        }
      
      </form>

    </section>
  )
}

export default UserSignup



        // <div className="user-sign-input-box">
        //   <label>Image
        //     <input type="file" 
        //     accept="image/*" 
        //     className="hidden" 
        //     />
        //   </label>
        // </div>