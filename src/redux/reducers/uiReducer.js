import { LOADING, SET_ERRORS, CLEAR_ERRORS } from "../types";

const initialState = {
  loading: false,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SET_ERRORS:
      return { loading: false, errors: action.payload };
    case CLEAR_ERRORS:
      return { loading: false, errors: {} };
    default:
      return { ...state };
  }
}
