import "../../css/NavBar/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import { useRef } from "react";
import { navigateStore } from "../../store/navigateStore.js";
import { logout } from "../../lib/helper.js";
import { NavLink } from "react-router-dom";
import { selectPageStore } from "../../store/selectSignupType.js";


const NavBar = () => {
  const underlineRef = useRef(null);
  const containerRef = useRef(null);
  const { user, setUser, setLikes } = navigateStore();
  const { changeSignupType } = selectPageStore();

  const handleMouseEnter = (e, wd=75, extra=0) => {
    const itemRect = e.target.getBoundingClientRect();
    underlineRef.current.style.transform = "scale(1)";
    underlineRef.current.style.width = `${itemRect.width+10+extra}px`;
    underlineRef.current.style.left = `${itemRect.left - wd}px`;
  };

  const handleMouseLeave = () => {
    underlineRef.current.style.transform = "scale(0)";
  };  

  const handleSignup = () => {
    if(!user) return;
    const res = logout();
    if(res.error) return;
    setUser(null); setLikes(null); changeSignupType("choose");
  }

  return (
    <header>
      
      <nav ref={containerRef} onMouseLeave={handleMouseLeave}>
        
        <div className="left">
          
          <NavLink to="/"
          className={({isActive}) => isActive ? "bolder logo" : "logo" }
          onMouseEnter={(e)=>handleMouseEnter(e, 100, 20)}
          >
          ArticleVerse
          </NavLink>

          <NavLink to="/majors"
          className={({isActive}) => isActive ? "bolder left-content" : "left-content" }
          onMouseEnter={(e)=>handleMouseEnter(e)}
          >
          Majors
          </NavLink>

          <NavLink to="/majors"
          className={({isActive}) => isActive ? "bolder left-content" : "left-content" }
          onMouseEnter={(e)=>handleMouseEnter(e)}
          >
          Minors
          </NavLink>

          <NavLink to="/authors"
          className={({isActive}) => isActive ? "bolder left-content" : "left-content" }
          onMouseEnter={handleMouseEnter}
          >
          Authors
          </NavLink>

        </div>

        <span className="nav-hover" ref={underlineRef}></span>
          
        <SearchBar/>

        <div className="right">
          
          <NavLink to="/contact"
          className={({isActive}) => isActive ? "bolder right-content" : "right-content" }
          onMouseEnter={(e)=>handleMouseEnter(e)}
          >
          Contact Us
          </NavLink>
          
          { 
          user ?
          <span 
          className="right-content" 
          onMouseEnter={(e)=>handleMouseEnter(e, 78, 35)}
          onClick={handleSignup}>
          Logout
          </span>
          :
          <NavLink to="/signup"
          className={({isActive}) => isActive ? "bolder right-content" : "right-content" }
          onMouseEnter={(e)=>handleMouseEnter(e, 78, 35)}
          >
          Signup
          </NavLink> 
          }
        </div>
      </nav>
    </header>
  )
}

export default NavBar