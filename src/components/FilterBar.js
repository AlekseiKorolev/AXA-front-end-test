import React from "react";

const FilterBar = props => {
  const menu = ["Name", "Id", "Age", "Weight", "Height", "Hair color"];
  return (
    <div>
      <ul>
        {menu.map((item, index) => (
          <li
            key={`menu+${index}`}
            className={props.filterType === item ? "selected" : ""}
            onClick={e => props.filterHandle(e, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
