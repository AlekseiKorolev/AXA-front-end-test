import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Card from "./Card";

const InhabitantsList = props => {
  const [selected, setSelected] = useState("");
  const { number, inhabitants } = props;

  const handleChoose = (e, name) => {
    const newSelected = selected === name ? "" : name;
    setSelected(newSelected);
  };

  return (
    <main>
      {inhabitants && inhabitants.length !== 0
        ? inhabitants
            .filter((item, index) => index < number)
            .map((inhabitant, index) => (
              <Card
                inhabitant={inhabitant}
                key={`key${index + inhabitant.id}`}
                handleSearchFriends={props.handleSearchFriends}
                selected={selected}
                handleChoose={handleChoose}
              />
            ))
        : null}
    </main>
  );
};

InhabitantsList.propTypes = {
  number: PropTypes.number.isRequired,
  inhabitants: PropTypes.array.isRequired,
  handleSearchFriends: PropTypes.func.isRequired
};

export default InhabitantsList;
