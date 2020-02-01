import React from "react";

// Components
import SearchInput from "./SearchInput";
import FilterBar from "./FilterBar";

const SearchBar = props => {
  const handleKeyPress = e => {
    if (e.which === 13) {
      props.handleClick(e);
    }
  };
  const { hint } = props;
  return (
    <header>
      <FilterBar
        filterType={props.filterType}
        filterHandle={props.filterHandle}
      />
      <SearchInput
        searchPhrase={props.searchPrase}
        handleChange={props.handleChange}
        handleKeyPress={handleKeyPress}
      />
      <button onClick={props.handleClick}>Search</button>
      {hint ? <div className="hint">{hint}</div> : null}
    </header>
  );
};

export default SearchBar;
