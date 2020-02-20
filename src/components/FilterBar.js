import React from "react";
import PropTypes from "prop-types";

const FilterBar = React.memo(props => {
  const menu = [
    "name",
    "id",
    "age",
    "weight",
    "height",
    "hair color",
    "profession"
  ];
  const { loading, filter } = props;
  return (
    <div className={loading ? "filtersMenuDisabled" : ""}>
      <ul>
        {menu.map((item, index) => (
          <li
            key={`menu+${index}`}
            className={filter === item ? "selected" : ""}
            onClick={() => props.filterHandle(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

FilterBar.propTypes = {
  loading: PropTypes.bool,
  filter: PropTypes.string,
  filterHandle: PropTypes.func.isRequired
};

export default FilterBar;
