import "../css/style.scss";
import React from "react";
import ReactDom from "react-dom";
import SessionForm from "./components/session_form";
import Root from "./components/root";
import { createStore } from "redux";
import rootReducer from "./reducers/root_reducer";
import { configureStore } from "./store/store";

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();

  ReactDom.render(<Root store={store}/>, document.getElementById("content"));
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
