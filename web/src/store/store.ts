import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import { ReceiveUserAction } from "../actions/user_actions";
import thunk from "redux-thunk";
import { ReceiveSessionErrorsAction } from "../actions/error_actions";
import { createLogger } from 'redux-logger';

export type AllTodoActions = ReceiveUserAction | ReceiveSessionErrorsAction

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk, createLogger()))
};

