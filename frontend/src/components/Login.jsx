import "../css/Login.css"
import { signupStore } from "../store/signupStore"

const UserSignup = () => {
  const {changePage} = signupStore();
  return (
    <section className="user-sign-login-box">
      <h2>Login</h2>
      
      <form>
        
        <div className="user-sign-input-box">
          <input type="text" required />
          <label>Username</label>
        </div>

        <div className="user-sign-input-box">
          <input type="password" required />
          <label>Password</label>
        </div>

        <div className="user-sign-options">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="user-sign-btn">Login</button>

        <p className="user-sign-register-link">
          Don’t have an account? <a href="/" onClick={() => changePage("choose")}>Register</a>
        </p>
      
      </form>

    </section>
  )
}

export default UserSignup