import React from "react";
import "./css/card.css";

const Card = props => {
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
  } = props.habitant;
  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={thumbnail} alt={name} />
        <div className="card-id">{id}</div>
      </div>
      <div className="card-name">{name}</div>
      <div className="card-age">
        Age: <i>{age}</i>
      </div>
      <div className="card-weight">
        Weight: <i>{weight ? weight.toFixed(0) : ""}</i>
      </div>
      <div className="card-height">
        Height: <i>{height ? height.toFixed(0) : ""}</i>
      </div>
      <div className="card-hair_color">
        Hair color: {hair_color}{" "}
        {hair_color ? (
          <span style={{ backgroundColor: hair_color }}>
            &nbsp;&nbsp;&nbsp;
          </span>
        ) : null}
      </div>
      <div className="card-professions">
        Professions: <i>{professions.join(", ")}</i>
      </div>
      <div className="card-friends">
        Friends: <i>{friends.join(", ")}</i>
      </div>
    </div>
  );
};

export default Card;
