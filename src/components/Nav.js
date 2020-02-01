import React from "react";

const Nav = props => {
  return (
    <nav>
      <button onClick={props.handleShowMore}>Show more</button> |{" "}
      <a href="#start">Up</a>
    </nav>
  );
};

export default Nav;
