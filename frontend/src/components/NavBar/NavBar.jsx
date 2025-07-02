import "../../css/NavBar/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import { useEffect, useRef } from "react";
import { navigateStore } from "../../store/navigateStore.js";
import { logout } from "../../lib/helper.js";
import { NavLink } from "react-router-dom";
import { selectPageStore } from "../../store/selectSignupType.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


const NavBar = () => {

  useGSAP(() => {
    const targets = gsap.utils.toArray(".toBeAnimated");
    if (targets.length === 0) return; 

    const tl = gsap.timeline();
    tl.from(targets, { y: -32, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 }, 0.2); 
  }, { scope: null, dependencies: [] }); 


  const underlineRef = useRef(null);
  const containerRef = useRef(null);
  const { user, setUser, setLikes } = navigateStore();
  const { changeSignupType } = selectPageStore();

  const handleMouseEnter = (e, wd = 75, extra = 0) => {
    const itemRect = e.target.getBoundingClientRect();
    underlineRef.current.style.transform = "scale(1)";
    underlineRef.current.style.width = `${itemRect.width + 10 + extra}px`;
    underlineRef.current.style.left = `${itemRect.left - wd}px`;
  };

  const handleMouseLeave = () => {
    underlineRef.current.style.transform = "scale(0)";
  };

  const handleSignup = () => {
    if (!user) return;
    const res = logout();
    if (res.error) return;
    setUser(null); setLikes(null); changeSignupType("choose");
  }

  return (
    <header>

      <nav ref={containerRef} onMouseLeave={handleMouseLeave}>

        <div className="left">

          <NavLink to="/"
            className={({ isActive }) => isActive ? "bolder logo" : "logo"}
            onMouseEnter={(e) => handleMouseEnter(e, 100, 20)}
          >
            <span className="toBeAnimated">ArticleVerse</span>
          </NavLink>

          <NavLink to="/majors"
            className={({ isActive }) => isActive ? "bolder left-content" : "left-content"}
            onMouseEnter={(e) => handleMouseEnter(e)}
          >
            <span className="toBeAnimated">Majors</span>
          </NavLink>

          <NavLink to="/minors"
            className={({ isActive }) => isActive ? "bolder left-content" : "left-content"}
            onMouseEnter={(e) => handleMouseEnter(e)}
          >
            <span className="toBeAnimated">Minors</span>
          </NavLink>

          <NavLink to="/authors"
            className={({ isActive }) => isActive ? "bolder left-content" : "left-content"}
            onMouseEnter={handleMouseEnter}
          >
            <span className="toBeAnimated">Authors</span>
          </NavLink>

        </div>

        <span className="nav-hover" ref={underlineRef}></span>

        <SearchBar />

        <div className="right">

          <NavLink to="/contact"
            className={({ isActive }) => isActive ? "bolder right-content" : "right-content"}
            onMouseEnter={(e) => handleMouseEnter(e)}
          >
            <span className="toBeAnimated">Contact Us</span>
          </NavLink>

          {
            user ?
              <span
                className="right-content"
                onMouseEnter={(e) => handleMouseEnter(e, 78, 35)}
                onClick={handleSignup}>
                <span className="toBeAnimated">Logout</span>
              </span>
              :
              <NavLink to="/signup"
                className={({ isActive }) => isActive ? "bolder right-content" : "right-content"}
                onMouseEnter={(e) => handleMouseEnter(e, 78, 35)}
              >
                <span className="toBeAnimated">Signup</span>
              </NavLink>
          }
        </div>
      </nav>
    </header>
  )
}

export default NavBar;