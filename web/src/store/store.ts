import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import { ReceiveUserAction } from "../actions/user_actions";
import thunk from "redux-thunk";
import { ErrorActions } from "../actions/error_actions";
import { createLogger } from 'redux-logger';

export type AllTodoActions = ReceiveUserAction | ErrorActions

export const configureStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, createLogger()))
};

