import { Action, ActionCreator } from "redux";

export interface ReceiveErrorsAction extends Action {
  type: "RECEIVE_ERRORS",
  errors: string[]
}

export const receiveErrors: ActionCreator<ReceiveErrorsAction> = (errors: string[]) => {
  return {
    type: "RECEIVE_ERRORS",
    errors
  };
}
