import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter, setAuthorFilter } from "../redux/actions";
import { getDistinctAuthors } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, activeAuthorFilter, setAuthorFilter, setFilter, authors }) => {
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

      <div className="visibility-filters">
        {authors.map((author) => {
          console.log(author, activeAuthorFilter)
          return (
            <span
              className={cx("filter", author === activeAuthorFilter && "filter--active")}
              key={`visibility-filter-author-${author}`}
              onClick={() => {
                console.log(author)
                setAuthorFilter(author);
                console.log(author)
              }}
            >
              {author}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const authors = getDistinctAuthors(state);

  return { activeFilter: state.visibilityFilter.filter, activeAuthorFilter: state.visibilityFilter.authorFilter, authors };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter, setAuthorFilter })(VisibilityFilters);
