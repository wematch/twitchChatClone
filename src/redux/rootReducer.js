import { combineReducers } from "redux";

import usernameReducer from "./username/username.reducer";

const rootReducer = combineReducers({
  username: usernameReducer,
});

export default rootReducer;
