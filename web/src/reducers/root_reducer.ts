import { combineReducers } from "redux";
import userReducers from "./user_reducers";
import errorReducer from "./error_reducers";

const rootReducer = combineReducers({
  session: userReducers,
  errors: errorReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
