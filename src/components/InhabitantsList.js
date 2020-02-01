import React from "react";

// Components
import Card from "./Card";

const InhabitantsList = props => {
  const { number, inhabitants } = props;
  return (
    <main>
      {inhabitants.length !== 0
        ? inhabitants
            .filter((item, index) => index < number)
            .map(habitant => <Card habitant={habitant} key={habitant.id} />)
        : null}
    </main>
  );
};

export default InhabitantsList;
