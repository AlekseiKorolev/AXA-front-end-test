import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

// Components
import SearchInput from "./SearchInput";
import FilterBar from "./FilterBar";

// redux
import { connect } from "react-redux";
import { searchData } from "../redux/actions/dataActions";

const SearchBar = props => {
  const [filter, setFilter] = useState("");
  const [hint, setHint] = useState("");
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    props.loading && setHint("Waiting for data...");
  }, [props.loading]); // loading

  useEffect(() => {
    props.hint && setHint(props.hint);
  }, [props.hint]); // loading finished

  useEffect(() => {
    props.errors.err && setHint(props.errors.err);
  }, [props.errors]); // errors

  const filterHandle = useCallback(
    filter => {
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
    },
    [setFilter]
  );

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
    props.searchData(filter, phrase);
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
  searchData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hintUI: state.UI.hintUI,
  loading: state.UI.loading,
  errors: state.UI.errors,
  hint: state.data.hint
});

export default connect(mapStateToProps, { searchData })(SearchBar);
