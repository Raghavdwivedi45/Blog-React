import "../../css/NavBar/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import { useRef } from "react";
import {selectPageStore}  from "../../store/selectSignupType.js";
import { navigateStore } from "../../store/navigateStore.js";
import { majorStore } from "../../store/majorStore.js";
import { authorStore } from "../../store/authorStore.js";
import { logout } from "../../lib/helper.js";


const NavBar = () => {
  const underlineRef = useRef(null);
  const containerRef = useRef(null);
  const { changePage, user, setUser } = navigateStore();
  const { changeSignupType } = selectPageStore();
  const { setMajorInfo, setSubmajorIdx } = majorStore();
  const {setAuthorInfo} = authorStore();

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
    if(user) {
      const res = logout();
      if(res.error) return;
      setUser(null);
    }
    else {
      changePage("signup"); changeSignupType("choose")
    }
  }


  return (
    <header>
      
      <nav ref={containerRef} onMouseLeave={handleMouseLeave}>
        
        <div className="left">
          
          <span 
          className="logo" 
          onMouseEnter={(e)=>handleMouseEnter(e, 100, 20)}
          onClick={() => changePage("home")}
          >
          ArticleVerse
          </span>

          <span 
          className="left-content" 
          onMouseEnter={(e)=>handleMouseEnter(e)}
          onClick={() => { changePage("majors"); setMajorInfo(null); setSubmajorIdx(null); }}
          >
          Majors
          </span>

          <span 
          className="left-content" 
          onMouseEnter={(e)=>handleMouseEnter(e)}
          onClick={() => changePage("minors")}
          >
          Minors
          </span>

          <span 
          className="left-content" 
          onMouseEnter={handleMouseEnter}
          onClick={() => { changePage("authors"); setAuthorInfo(null) }}
          >
          Authors
          </span>

        </div>

        <span className="nav-hover" ref={underlineRef}></span>
          
        <SearchBar/>

        <div className="right">
          
          <span 
          className="right-content" 
          onMouseEnter={(e)=>handleMouseEnter(e)}
          onClick={() => changePage("contact")}
          >
          Contact Us
          </span>
          
          <span 
          className="right-content" 
          onMouseEnter={(e)=>handleMouseEnter(e, 78, 35)}
          onClick={handleSignup}>
          {user ? "Logout" : "Signup"}
          </span>
        </div>
      </nav>
    </header>
  )
}

export default NavBar