/* eslint-disable no-const-assign */
/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */ 
import { ADD_TODO } from "../actionTypes";  
const todos = function (state = [] , action)  { 
    // console.log("action.type", action.type)
    switch (action.type) {
        case ADD_TODO: {  
            console.log("action", action) 
            state = []
            return  state = [...state, action.payload.content];
        }
        default:
      return state;
    }
}
export default todos;
