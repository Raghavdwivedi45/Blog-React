import "../css/Navbar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {


  return (
    <header>
      <nav>
        <div className="left">
        <span className="logo">ArticleVerse</span>
        <span className="left-content">Majors</span>
        <span className="left-content">Minors</span>
        <span className="left-content">Authors</span>
        </div>

        <SearchBar/>

        <div className="right">
          <span className="right-content">Contact Us</span>
          <span className="right-content">Signup</span>
        </div>
      </nav>
    </header>
  )
}

export default NavBar