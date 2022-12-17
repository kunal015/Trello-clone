import React from "react";
import ReactDOM from "react-dom";

import App from "../src/Components/App";

import { Provider } from "react-redux";
import store from "./store";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
