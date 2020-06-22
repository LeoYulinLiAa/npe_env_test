import "../css/style.scss";
import React from "react";
import ReactDom from "react-dom";
import Root from "./components/root";
import { configureStore } from "./store/store";
import { getSession } from "./utils/local_storage_util";

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore({
    session: getSession()
  });

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
