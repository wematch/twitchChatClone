import { SET_USERNAME } from './actionsTypes'

export const setUsername = (user) => ({
  type: SET_USERNAME,
  payload: {
    username: user.username,
    userColor: user.userColor
  }
});
