import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import uiReducer from "./reducers/uiReducer";
import dataReducer from "./reducers/dataReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  UI: uiReducer,
  data: dataReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
