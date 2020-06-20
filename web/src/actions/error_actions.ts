import { Action } from "redux";

export interface ReceiveErrorsAction extends Action {
  type: "RECEIVE_ERRORS",
  errors: string[]
}

export function receiveErrors(errors: string[]): ReceiveErrorsAction {
  return {
    type: "RECEIVE_ERRORS",
    errors
  };
}
