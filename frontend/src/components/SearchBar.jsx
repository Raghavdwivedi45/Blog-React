import "../css/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <input id="search-input" type="text" placeholder="Type to Search"/>
      <label htmlFor="search-input">Search</label>
    </div>
  )
}

export default SearchBar