import { ADD_TODO, LOGIN_SUCCESS, LOGIN_INCORRECT } from "./actionTypes";

export const nameTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});
export const userLoginSuccess = (content) => ({
  type: LOGIN_SUCCESS,
  payload: {
    content,
  },
});
// export const userLoginIncorrect = (content) => ({
//   type: LOGIN_INCORRECT,
//   payload: {
//     content,
//   },
// });

// export const maskTaskComplete = (id, isComplete) => ({
//   type: ADD_TODO,
//   payload: {
//     id,
//     isComplete,
//   },
// });
// export const maskTaskFavorite = (id, isFavorite) => ({
//   type: ADD_TODO,
//   payload: { id, isFavorite },
// });
