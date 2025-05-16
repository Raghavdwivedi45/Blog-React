import "../css/Navbar.css";
import SearchBar from "./SearchBar";
import { useRef } from "react";
import {signupStore}  from "../store/signupStore.js";

const NavBar = () => {
  const underlineRef = useRef(null);
  const containerRef = useRef(null);
  const {changePage} = signupStore();

  const handleMouseEnter = (e, wd=75, extra=0) => {
    const itemRect = e.target.getBoundingClientRect();
    underlineRef.current.style.transform = "scale(1)";
    underlineRef.current.style.width = `${itemRect.width+10+extra}px`;
    underlineRef.current.style.left = `${itemRect.left - wd}px`;
  };

  const handleMouseLeave = () => {
    underlineRef.current.style.transform = "scale(0)";
  };

  return (
    <header>
      <nav ref={containerRef} onMouseLeave={handleMouseLeave}>
        <div className="left">
        <span className="logo" onMouseEnter={(e)=>handleMouseEnter(e, 100, 20)}>ArticleVerse</span>
        <span className="left-content" onMouseEnter={(e)=>handleMouseEnter(e)}>Majors</span>
        <span className="left-content" onMouseEnter={(e)=>handleMouseEnter(e)}>Minors</span>
        <span className="left-content" onMouseEnter={handleMouseEnter}>Authors</span>
        </div>

        <span className="nav-hover" ref={underlineRef}></span>
        <SearchBar/>

        <div className="right">
          <span className="right-content" onMouseEnter={(e)=>handleMouseEnter(e)}>Contact Us</span>
          
          <span 
          className="right-content" 
          onMouseEnter={(e)=>handleMouseEnter(e, 78, 35)}
          onClick={()=> changePage("choose")}>
          Signup
          </span>
        </div>
      </nav>
    </header>
  )
}

export default NavBar