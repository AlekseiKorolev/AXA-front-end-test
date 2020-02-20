import {
  SET_DATA,
  SEARCH_DATA,
  SEARCH_FRIENDS,
  SEARCH_CLEAR,
  LOADING,
  SET_ERRORS,
  CLEAR_ERRORS
} from "../types";

import store from "../store";

import dataRequest from "../../util/dataRequest";
import dataFilter from "../../util/dataFilter";

export const getData = () => dispatch => {
  dispatch({ type: LOADING });
  dataRequest
    .getData()
    .then(res => {
      dispatch({
        type: SET_DATA,
        payload: res[Object.keys(res)]
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: { err: "Something went wrong. Please, reload the app" }
      });
    });
};

export const searchData = (filterType, searchPhrase) => dispatch => {
  const { data } = store.getState().data;
  dispatch({ type: LOADING });
  dispatch({
    type: SEARCH_DATA,
    payload: dataFilter.getFiltered(data, filterType, searchPhrase)
  });
  dispatch({ type: CLEAR_ERRORS });
};

export const searchFriends = name => dispatch => {
  const { data } = store.getState().data;
  dispatch({ type: LOADING });
  dispatch({
    type: SEARCH_FRIENDS,
    payload: dataFilter.getFriends(data, name)
  });
  dispatch({ type: CLEAR_ERRORS });
};

export const searchClear = () => dispatch => {
  dispatch({ type: LOADING });
  dispatch({
    type: SEARCH_CLEAR
  });
  dispatch({ type: CLEAR_ERRORS });
};
