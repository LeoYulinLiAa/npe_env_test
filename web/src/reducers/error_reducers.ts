import { ReceiveErrorsAction } from "../actions/error_actions";
import { Dispatch } from "redux";

const errorReducer = (state = [], action: ReceiveErrorsAction) => {
  switch (action.type) {
    case "RECEIVE_ERRORS":
      return action.errors;
    default:
      return state;
  }
}

export default errorReducer;
