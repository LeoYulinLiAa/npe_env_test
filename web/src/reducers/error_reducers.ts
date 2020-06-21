import { ErrorActions, ReceiveSessionErrorsAction } from "../actions/error_actions";

type ErrorState =  { session: string[] }

const defaultState: ErrorState = {
  session: []
};

const errorReducer = (state = defaultState, action: ErrorActions): ErrorState => {
  switch (action.type) {
    case "SESSION_ERROR_RESET":
      return defaultState;
    case "RECEIVE_SESSION_ERRORS":
      return {...state, session: action.errors };
    default:
      return state;
  }
}

export default errorReducer;
