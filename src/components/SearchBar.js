import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import SearchInput from "./SearchInput";
import FilterBar from "./FilterBar";

const SearchBar = props => {
  const [filter, setFilter] = useState("");
  const [hint, setHint] = useState("");
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    setHint(props.hintUI);
  }, [props.hintUI]);

  const handleChange = e => {
    const value = e.target.value;
    setPhrase(value);
  };

  const handleKeyPress = e => {
    if (e.which === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    props.handleSearch(filter, phrase);
  };

  const filterHandle = (e, filter) => {
    e.preventDefault();
    const newHint =
      filter !== "name" && filter !== "hair color"
        ? "You can set the interval if you use a dash between numbers"
        : filter === "name"
        ? "The search phrase is compared with the first and second name individually"
        : filter === "profession"
        ? "You can set list of professions if you use a comma between it"
        : 'Select a filter type, fill in the field and click "Search"';
    setHint(newHint);
    setFilter(filter);
  };

  const { loading } = props;
  return (
    <header>
      <FilterBar
        filter={filter}
        filterHandle={filterHandle}
        loading={loading}
      />
      <SearchInput
        phrase={phrase}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
      {hint ? <div className="hint">{hint}</div> : null}
    </header>
  );
};

SearchBar.propTypes = {
  hintUI: PropTypes.string,
  loading: PropTypes.bool,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
