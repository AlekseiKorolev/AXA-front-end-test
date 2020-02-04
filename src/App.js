import React, { useState, useEffect } from "react";
import "./App.css";

// utils
import dataFilter from "./util/dataFilter";
import dataRequest from "./util/dataRequest";

// Components
import InhabitantsList from "./components/InhabitantsList";
import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";

const App = () => {
  const [data, setData] = useState([]);
  const [inhabitants, setInhabitants] = useState([]);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [hintUI, setHintUI] = useState("Waiting for data...");

  useEffect(() => {
    setLoading(true);
    dataRequest
      .getData()
      .then(res => {
        setData(res[Object.keys(res)]);
        setLoading(false);
        setHintUI("Loading completed, let's search");
      })
      .catch(err => setHintUI("Something went wrong. Please, reload the app"));
  }, []);

  const handleSearch = (filter, phrase) => {
    const inhabitants = dataFilter.getFiltered(data, filter, phrase);
    const newHintUI = inhabitants
      ? `Found ${inhabitants.length} inhabitants`
      : `Nothing found`;
    setInhabitants(inhabitants);
    setHintUI(newHintUI);
  };

  const handleSearchFriends = (e, name) => {
    e.preventDefault();
    const friends = dataFilter.getFriends(data, name);
    const newHintUI = friends
      ? `Found ${friends.length - 1} friends`
      : `Nothing found`;
    setInhabitants(friends);
    setHintUI(newHintUI);
  };

  const handleShowMore = () => {
    const newCount = count + 10;
    setCount(newCount);
  };

  const handleClear = () => {
    setInhabitants([]);
    setHintUI('Select a filter type, fill in the field and click "Search"');
  };

  return (
    <div className="app">
      <h1 id="start">Brastlewark city population</h1>
      <SearchBar
        handleSearch={handleSearch}
        loading={loading}
        hintUI={hintUI}
      />
      {inhabitants.length !== 0 ? (
        <InhabitantsList
          inhabitants={inhabitants}
          number={count}
          handleSearchFriends={handleSearchFriends}
        />
      ) : null}
      {inhabitants.length !== 0 ? (
        <Nav handleShowMore={handleShowMore} handleClear={handleClear} />
      ) : null}
    </div>
  );
};

export default App;
