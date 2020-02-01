import React, { useState } from "react";
import "./App.css";

// utils
import dataRequest from "./util/dataRequest";

// Components
import InhabitantsList from "./components/InhabitantsList";
import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";

const initialState = {
  inhabitants: [],
  number: 10,
  filterType: "",
  searchPhrase: "",
  hint: 'Select a filter type, fill in the field and click "Search"'
};

const App = () => {
  const [state, setState] = useState(initialState);

  const handleClick = e => {
    dataRequest
      .search(state.filterType, state.searchPhrase, state.number)
      .then(inhabitants =>
        setState(state => ({
          ...state,
          inhabitants: inhabitants,
          hint: inhabitants
            ? `Found ${inhabitants.length} inhabitants`
            : `Nothing found`
        }))
      );
  };

  const filterHandle = (e, filterType) => {
    const hint =
      filterType !== "Name" && filterType !== "Hair color"
        ? "You can set the interval if you use a dash between numbers"
        : filterType === "Name"
        ? "The search phrase is compared with the first and second name individually"
        : 'Select a filter type, fill in the field and click "Search"';
    setState(state => ({ ...state, filterType: filterType, hint: hint }));
  };

  const handleChange = e => {
    const value = e.target.value;
    setState(state => ({ ...state, searchPhrase: value }));
  };

  const handleShowMore = () => {
    setState(state => ({ ...state, number: state.number + 10 }));
  };

  return (
    <div className="app">
      <h1 id="start">Brastlewark city population</h1>
      <SearchBar
        filterHandle={filterHandle}
        handleChange={handleChange}
        handleClick={handleClick}
        filterType={state.filterType}
        searchPhrase={state.searchPrase}
        hint={state.hint}
      />
      <InhabitantsList inhabitants={state.inhabitants} number={state.number} />
      {state.inhabitants.length !== 0 ? (
        <Nav handleShowMore={handleShowMore} />
      ) : null}
    </div>
  );
};

export default App;
