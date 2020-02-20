import { SET_DATA, SEARCH_DATA, SEARCH_FRIENDS, SEARCH_CLEAR } from "../types";

const initialState = {
  data: [],
  searchResult: [],
  hint: ""
};

export default function(state = initialState, action) {
  let hint = "";
  switch (action.type) {
    case SET_DATA:
      hint = "Loading completed, let's search";
      return { ...state, data: action.payload, hint: hint };
    case SEARCH_DATA:
      hint =
        action.payload.length > 0
          ? `Found ${action.payload.length} inhabitant`
          : `Nothing found`;
      return { ...state, searchResult: action.payload, hint: hint };
    case SEARCH_FRIENDS:
      hint =
        action.payload.length > 0
          ? `Found ${action.payload.length - 1} friends`
          : `Nothing found`;
      return { ...state, searchResult: action.payload, hint: hint };
    case SEARCH_CLEAR:
      hint = 'Select a filter type, fill in the field and click "Search"';
      return { ...state, searchResult: [], hint: hint };
    default:
      return state;
  }
}
