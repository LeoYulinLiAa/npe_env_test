import { ReceiveUserAction } from "../actions/user_actions";


function userReducers(state = {}, action: ReceiveUserAction) {
  switch (action.type) {
    case "RECEIVE_USER":
      return { ...state, ...action.user };
    default:
      return state;
  }
}

export default userReducers
