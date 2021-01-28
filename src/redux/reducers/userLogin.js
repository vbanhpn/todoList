import { LOGIN_SUCCESS } from "../actionTypes"; 
const userLogin = function (state = "", action) {
  console.log("action.type: LOGIN_SUCCESS", action.type);
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log("action", action);
      // state = ""; 
      action.type = ""
      return (state = action.payload.content);
    }
    default:
      return state;
  }
};
export default userLogin;