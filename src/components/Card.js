import React from "react";
import PropTypes from "prop-types";

import "./css/card.css";

const Card = props => {
  const gender = name => {
    const endings = ["ia", "te", "le", "li", "ki"];
    let firstName = name.split(" ")[0];
    return endings.some(
      ending => ending === firstName.slice(firstName.length - 2).toLowerCase()
    )
      ? "Female"
      : "Male";
  };

  const {
    id,
    name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends
  } = props.inhabitant;

  const { selected, handleChoose } = props;
  return (
    <div
      className={selected === name ? "card selectedCard" : "card"}
      onClick={e => handleChoose(e, name)}
    >
      <div className="card-thumbnail">
        <img src={thumbnail} alt={name} />
        <div className="card-id">{id}</div>
        {selected === name ? (
          <button onClick={e => props.handleSearchFriends(e, name)}>
            Find all friends
          </button>
        ) : null}
      </div>
      <div className="card-name">{name}</div>
      <div className="card-age">
        Age: <i>{age}</i>
      </div>
      <div className="card-gender">
        Gender: <i>{name ? gender(name) : ""}</i>
      </div>
      <div className="card-weight">
        Weight: <i>{isNaN(weight) ? "" : Math.floor(weight)}</i>
      </div>
      <div className="card-height">
        Height: <i>{isNaN(height) ? "" : Math.floor(height)}</i>
      </div>
      <div className="card-hair_color">
        Hair color: <i>{hair_color}</i>{" "}
        {hair_color ? (
          <span style={{ backgroundColor: hair_color }}>
            &nbsp;&nbsp;&nbsp;
          </span>
        ) : null}
      </div>
      <div className="card-professions">
        Professions:{" "}
        <i>
          {Array.isArray(professions) ? professions.join(", ") : professions}
        </i>
      </div>
      <div className="card-friends">
        Friends: <i>{Array.isArray(friends) ? friends.join(", ") : friends}</i>
      </div>
    </div>
  );
};

Card.propTypes = {
  inhabitant: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  handleSearchFriends: PropTypes.func.isRequired,
  handleChoose: PropTypes.func.isRequired
};
export default Card;
