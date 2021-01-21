/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
// const url = "https://jsonplaceholder.typicode.com/todos/";
import "./App.css";
import Header from "./components/Header";
import InCompleteTask from "./components/InCompleteTask";
import CompleteTask from "./components/CompleteTask";
import { useState } from "react";  
// import { Spin, Space } from "antd"; 
// import 'antd/dist/antd.css';
import {
  changeTaskCompleteState,
  changeTaskFavoriteState,
  getTodo,
} from "./Services/TodoService";
import _ from "lodash";
import React from "react"; 
import { connect } from "react-redux"; 
import { nameTodo } from "./redux/actionCreators"; 

export function App({nameTodo}) {
  // let listTask = getTodo();
  let [taskLists, setTaskLists] = useState([]);
  let [isLoading, setisLoading] = useState(true);
  let [, setisError] = useState(false);
  let [error, setError] = useState("");
  let [count, setCount] = useState(0);
  const convertDate = (time) => new Date(time).getTime();
  React.useEffect(async () => {
    async function fetchData() {
      try {
        const response = await getTodo();
        // console.log("response.data[0].id", response.data.data);
        setTaskLists(
          response.data.data.map((task) => {
            return {
              ...task,
              createDate: convertDate(task.createDate),
              CompletedDate: convertDate(task.CompletedDate),
            };
          })
        );
        // console.log("detailResponse", response.data.data);
      } catch (ex) {
        setisError(true);
        setError(ex.message);
      } finally {
        setisLoading(false);
      }
    }
    fetchData();
  }, [count]);
  // console.log("listTask", taskLists);

  /// add todo
  // const handleAddTodo = async (newTaskName) => {
  //   console.log("newTaskName1", newTaskName);
  //   try {
  //     if (newTaskName) {
  //       setisLoading(true);
  //       setisError(false);
  //       await addTodo(newTaskName);
  //       setCount(count + 1);
  //     }
  //   } catch (ex) {
  //     setisError(true);
  //     setError(ex.message);
  //     console.log(error);
  //   }
  // };
  /// change CompleteStatus
  const handleChangeCompleteStatus = async (taskId, newStatus) => {
    try {
      setisLoading(true);
      setisError(false);
      await changeTaskCompleteState(taskId, newStatus);
      setCount(count + 1);
    } catch (ex) {
      setisError(true);
      setError(ex.message);
      console.log(error);
    }
  };
  const handleChangeFavoriteStatus = async (taskId, newStatus) => {
    try {
      setisLoading(true);
      setisError(false);
      await changeTaskFavoriteState(taskId, newStatus);
      setCount(count + 1);
    } catch (ex) {
      setisError(true);
      setError(ex.message);
      console.log(error);
    }
  };
  const [completeList, inCompleteList] = _.partition(
    taskLists,
    (t) => t.isCompleted
  );
  // console.log("completeList", completeList);
  // console.log("inCompleteList", inCompleteList);

  const onAddTodoChange = () => {
    setisLoading(true);
    setCount(count + 1);
  };
  const renderContent = () => {
    return (
      <div>
        <Header onAddTodoChange={onAddTodoChange} />
        <InCompleteTask
          incompleteList={inCompleteList}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        <CompleteTask
          completeList={completeList}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
      </div>
    );
  };

  return (
    <div className="App">
      <h1> {isLoading ? ".........Loading..........."  
         : renderContent()} </h1>
         {/* <button onClick = {nameTodo}> Redux </button> */}
    </div>
  );
} 
// export default App;
const mapStateToProps = (state) => {
  console.log("APP.js State",state.todo);
  return { Name: state.todo 
  };
};
const mapDispatchToProps = {nameTodo}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// 
