/* eslint-disable no-sequences */
import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { React, useState } from "react";
import { addTodo } from "../Services/TodoService";
// import { Spin, Space } from "antd";
import { connect } from "react-redux"; 
import { nameTodo } from "../redux/actionCreators"; 

export function Header({ onAddTodoChange, nameTodo }) {
  let [currentItem, setCurrentItem] = useState("");
  const handleChange = (value) => {
    setCurrentItem(value);
  };

  let [, setisError] = useState(false);
  let [error, setError] = useState("");
  let [isAdd, setIsAdd] = useState(false);
  // function add todo
  const addTodoItem = async (newTaskName) => {
    try {
      setisError(false);
      setIsAdd(true);
      await addTodo(newTaskName); 
      nameTodo(currentItem) 
      onAddTodoChange();
    } catch (ex) {
      setisError(true);
      setError(ex.message);
      console.log(error);
    } finally {
      setIsAdd(false);
    }
  };
  const handleKeydown = (event) => {
    if (event.keyCode === 13 && currentItem) {
      console.log("currentItem", currentItem);
      addTodoItem(currentItem);
      setCurrentItem("");
    }
  };
  // const LoadingAdd = () => {
  //   if (isAdd) {
  //     return (
  //       <h1>
  //         <Space size="middle">
  //           <Spin size="small" />
  //           <Spin />
  //           <Spin size="large" />
  //         </Space>
  //       </h1>
  //     );
  //   } else {
  //     <h1>"Todo -Task"</h1>;
  //   }
  // };
  return (
    <header className={classes.heading}>
     <h1>"Todo -Task"</h1>
      <div>
        <input
          disabled={isAdd}
          type="text"
          placeholder="Add a task"
          value={currentItem}
          onChange={(event) =>  handleChange(event.target.value)}
          onKeyDown={(event) => handleKeydown(event)}
        />
        <button disabled={isAdd} onClick={() => {addTodoItem(currentItem)  } }> 
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}
// export default Header; 
const mapStateToProps = (state) => {
  // alert("state :" + state.todo);
  return { Name: state.todo 
  };
};

const mapDispatchToProps = {nameTodo}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
