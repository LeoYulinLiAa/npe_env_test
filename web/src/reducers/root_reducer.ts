import { combineReducers } from "redux";
import { userReducers } from "./user_reducers";
import errorReducer from "./error_reducers";

const rootReducer = combineReducers({
  users: userReducers,
  errors: errorReducer
});

export default rootReducer;
