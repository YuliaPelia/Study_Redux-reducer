import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore, bindActionCreators } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = configureStore({ reducer });

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
  {
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd,
  },
  dispatch
);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById("inc").addEventListener("click", incDispatch);
document.getElementById("dec").addEventListener("click", decDispatch);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);

  rndDispatch(value);
});

export default store;

const root = document.getElementById("root");

const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
