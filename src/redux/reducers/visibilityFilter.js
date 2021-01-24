import { SET_AUTHOR_FILTER, SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = { filter: VISIBILITY_FILTERS.ALL, authorFilter: "ALL" };

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHOR_FILTER: {
      console.log('set author filter')
      return { filter: state.filter, authorFilter: action.payload.authorFilter }
    }
    case SET_FILTER: {
      return { filter: action.payload.filter, authorFilter: state.authorFilter };
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
