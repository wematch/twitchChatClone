import { SET_USERNAME } from './actionsTypes'

export const setUsername = username => ({
  type: SET_USERNAME,
  payload: {
    username: username
  }
});
