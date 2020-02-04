import React from "react";
import PropTypes from "prop-types";

const SearchInput = props => {
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Who are you looking for"
        onChange={props.handleChange}
        value={props.phrase}
        onKeyPress={props.handleKeyPress}
      />
    </div>
  );
};

SearchInput.propTypes = {
  phrase: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired
};

export default SearchInput;
