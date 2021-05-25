const SearchBar = (props) => {
  return <input type="text" id="search-bar" onChange={props.setItemSearch} />;
};

export default SearchBar;
