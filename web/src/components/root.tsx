import React, { FC } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import App from "./app";
import { ReceiveUserAction } from "../actions/user_actions";
import { AllTodoActions } from "../store/store";

const Root: FC<{store: Store<any, AllTodoActions>}> = props => {
  return <Provider store={props.store}>
    <App />
  </Provider>
}

export default Root;
