import React from "react";
import PropTypes from "prop-types";

const Nav = props => {
  return (
    <nav>
      <button onClick={props.handleShowMore}>Show more</button> |{" "}
      <a href="#start">Up</a> |{" "}
      <button onClick={props.handleClear}>Clear</button>
    </nav>
  );
};

Nav.propTypes = {
  handleShowMore: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired
};

export default Nav;
