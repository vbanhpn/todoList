/* eslint-disable no-sequences */
import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { React, useState } from "react";
import { addTodo } from "../Services/TodoService";
// import { Spin, Space } from "antd";
import { connect } from "react-redux"; 
import {nameTodo, userLoginSuccess } from "../redux/actionCreators"; 
export function Header({ onAddTodoChange, nameTodo, userName }) {
  let [currentItem, setCurrentItem] = useState("");
  const handleChange = (value) => {
    setCurrentItem(value);
  };

  let [, setisError] = useState(false);
  let [error, setError] = useState("");
  let [isAdding, setIsAdding] = useState(false);
  // function add todo
  const addTodoItem = async (newTaskName) => {
    try {
      setisError(false);
      setIsAdding(true);
      await addTodo(newTaskName); 
      nameTodo(currentItem) 
      onAddTodoChange();
    } catch (ex) {
      setisError(true);
      setError(ex.message);
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };
  const handleKeydown = (event) => {
    if (event.keyCode === 13 && currentItem) {
      console.log("currentItem", currentItem);
      addTodoItem(currentItem);
      setCurrentItem("");
    }
  };
  return (
    <header className={classes.heading}>
     <h1> Xin chào:  {userName} </h1>
      <div>
        <input
          disabled={isAdding}
          type="text"
          placeholder="Add a task"
          value={currentItem}
          onChange={(event) =>  handleChange(event.target.value)}
          onKeyDown={(event) => handleKeydown(event)}
        />
        <button disabled={isAdding} onClick={() => {addTodoItem(currentItem)  } }> 
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}
// let [userName, setUserName] = useState("")
// export default Header; 
const mapStateToProps = (state) => {
  console.log("state.user ", state ) 
  return { userName: state.userLogin 
  };
};
const mapDispatchToProps = {nameTodo}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
