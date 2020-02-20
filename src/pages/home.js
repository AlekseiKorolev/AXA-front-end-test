import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import InhabitantsList from "../components/InhabitantsList";
import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav";

// redux
import { connect } from "react-redux";
import {
  getData,
  searchFriends,
  searchClear
} from "../redux/actions/dataActions";
import store from "../redux/store";

const useFetchData = () => {
  useEffect(() => {
    store.dispatch(getData());
  }, []); // started
};

const Home = props => {
  const [inhabitants, setInhabitants] = useState([]);
  const [count, setCount] = useState(10);

  useFetchData();

  useEffect(() => {
    setInhabitants(props.searchResult);
  }, [props.hint, props.searchResult]); // search result

  const handleSearchFriends = (e, name) => {
    e.preventDefault();
    props.searchFriends(name);
  };

  const handleShowMore = () => {
    const newCount = count + 10;
    setCount(newCount);
  };

  const handleClear = () => {
    props.searchClear();
    setCount(10);
  };

  return (
    <div>
      <h1 id="start">Brastlewark city population</h1>
      <SearchBar />
      {props.searchResult.length !== 0 ? (
        <InhabitantsList
          inhabitants={inhabitants}
          number={count}
          handleSearchFriends={handleSearchFriends}
        />
      ) : null}
      {props.searchResult.length !== 0 ? (
        <Nav handleShowMore={handleShowMore} handleClear={handleClear} />
      ) : null}
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  searchResult: PropTypes.array,
  getData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data.data,
  searchResult: state.data.searchResult
});

const mapActionsToProps = {
  getData,
  searchFriends,
  searchClear
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
