import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "../src/app/store";

import App from "./App";
import { fetchUsers } from "./features/users/usersSlice";
store.dispatch(fetchUsers());
// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
