import { Action } from "redux";

export interface ReceiveSessionErrorsAction extends Action<"RECEIVE_SESSION_ERRORS"> {
  errors: string[]
}

export interface SessionErrorResetAction extends Action<"SESSION_ERROR_RESET"> {

}

export function receiveSessionErrors(errors: string[]): ReceiveSessionErrorsAction {
  return {
    type: "RECEIVE_SESSION_ERRORS",
    errors
  };
}

export function sessionErrorReset(): SessionErrorResetAction {
  return {
    type: "SESSION_ERROR_RESET"
  }
}

export type ErrorActions = ReceiveSessionErrorsAction | SessionErrorResetAction;
