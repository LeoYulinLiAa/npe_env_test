import { Action, ActionCreator, Dispatch } from "redux";
import { postSessions, postUsers } from "../utils/api_utils";
import { FormUser, User } from "../types/user";
import { receiveSessionErrors, sessionErrorReset } from "./error_actions";

export interface ReceiveUserAction extends Action {
  type: "RECEIVE_USER",
  user: User
}

export const receiveUser: ActionCreator<ReceiveUserAction> = (user: User) => {
  return {
    type: "RECEIVE_USER",
    user
  };
}

export function login(user: FormUser) {
  return (dispatch: Dispatch) => {
    postSessions(user)
      .then((user: User) => {
        dispatch(receiveUser(user));
        dispatch(sessionErrorReset());
      }, err => {
        dispatch(receiveSessionErrors(err.responseJSON))
      })
  }
}

export function signup(user: FormUser) {
  return (dispatch: Dispatch) => {
    postUsers(user)
      .then((user: User) => {
        dispatch(receiveUser(user));
        dispatch(sessionErrorReset());
      }, err => {
        dispatch(receiveSessionErrors(err.responseJSON))
      })
  }
}

