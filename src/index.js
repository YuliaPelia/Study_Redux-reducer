import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { Provider } from "react-redux";

import App from "./components/App";

const store = configureStore({ reducer });

const root = document.getElementById("root");

const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
