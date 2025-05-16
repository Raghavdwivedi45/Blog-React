import { useRef } from "react";
import "../css/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <input id="search-input" type="text" placeholder="Type to Search" />
      <label id="search-label" htmlFor="search-input">
        Search
        <span className="ripple"></span>
      </label>
    </div>
  );
};

export default SearchBar;
