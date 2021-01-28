import { combineReducers } from "redux";
import todos from "./todos"; 
import userLogin from "./userLogin";

export default combineReducers( {todos, userLogin} );
