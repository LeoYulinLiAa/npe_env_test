import { Action, ActionCreator, Dispatch } from "redux";
import { postSessions, postUsers } from "../utils/api_utils";
import { FormUser, User } from "../types/user";
import { receiveErrors } from "./error_actions";

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
      // .then(res => res.json())
      // .then(({ id, username }) => dispatch(receiveUser({id, username})))
      .then((user: User) => dispatch(receiveUser(user)), () => {
        dispatch(receiveErrors("wat login"))
      })
  }
}

export function signup(user: FormUser) {
  return (dispatch: Dispatch) => {
    postUsers(user)
      .then((user: User) => dispatch(receiveUser(user)), err => {
        dispatch(receiveErrors(err.responseJSON))
      })
  }
}

