import React from "react";
import "./App.css";

// Components
import Home from "./pages/home";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
};

export default App;
