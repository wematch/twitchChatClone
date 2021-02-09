import { SET_USERNAME } from "../actionsTypes";

const initialState = {
  username: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME: 
      return action.payload.username;
    default:
      return state;
  }
}
