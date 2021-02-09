import { SETUSERNAME } from "./username.types";

const INITIAL_STATE = {
  username: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETUSERNAME:
      return action.payload.username;
    default:
      return state;
  }
};

export default reducer;
