import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { getDistinctAuthors } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter, authors }) => {
  return (
    <div>
      <div className="visibility-filters">
        {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
          const currentFilter = VISIBILITY_FILTERS[filterKey];
          return (
            <span
              key={`visibility-filter-${currentFilter}`}
              className={cx(
                "filter",
                currentFilter === activeFilter && "filter--active"
              )}
              onClick={() => {
                setFilter(currentFilter);
              }}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>

      <div>
        {authors.map((author) => {
          return <p>{author}</p>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const authors = getDistinctAuthors(state);

  return { activeFilter: state.visibilityFilter, authors };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);