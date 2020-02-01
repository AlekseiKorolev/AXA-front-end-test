import React from "react";

const SearchInput = props => {
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Who are you looking for"
        onChange={props.handleChange}
        value={props.searchPhrase}
        onKeyPress={props.handleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
