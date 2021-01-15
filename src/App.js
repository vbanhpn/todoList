/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
// const url = "https://jsonplaceholder.typicode.com/todos/";
import "./App.css";
import Header from "./components/Header";
import InCompleteTask from "./components/InCompleteTask";
import CompleteTask from "./components/CompleteTask";
import { useState } from "react";
import {
  addTodo,
  changeTaskCompleteState,
  changeTaskFavoriteState,
  getTodo,
} from "./Services/TodoService";
import _ from "lodash";
import React from "react";
function App() {
  // let listTask = getTodo();
  let [taskLists, setTaskLists] = useState([]);
  let [isLoading, setisLoading] = useState(true);
  let [, setisError] = useState(false);
  let [error, setError] = useState("");
  let [count, setCount] = useState(0);
  React.useEffect(async () => {
    try {
      const response = await getTodo();
      console.log("response.data[0].id", response.data.data);
      setTaskLists(response.data.data);
      console.log("detailResponse", response.data.data);
    } catch (ex) {
      setisError(true);
      setError(ex.message);
    } finally {
      setisLoading(false);
    }
  }, [count]);
  console.log("listTask", taskLists);
  const handleAddTodo = async (newTaskName) => {
    console.log("newTaskName1", newTaskName);
    try {
      if (newTaskName) {
        await addTodo(newTaskName);
        setisLoading(true);
        setisError(false);
        setCount(count + 1);
      }
    } catch (ex) {
      setisError(true);
      setError(ex.message);
      console.log(error);
    }
  };
  const handleChangeCompleteStatus = async (taskId, newStatus) => {
    try {
      await changeTaskCompleteState(taskId, newStatus);
      setisLoading(true);
      setisError(false);
      setCount(count + 1);
    } catch (ex) {
      setisError(true);
      setError(ex.message);
      console.log(error);
    }
  };
  const handleChangeFavoriteStatus = async (taskId, newStatus) => {
    try {
      await changeTaskFavoriteState(taskId, newStatus);
      setisLoading(true);
      setisError(false);
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
  console.log("completeList", completeList);
  console.log("inCompleteList", inCompleteList);
  const renderContent = () => {
    return (
      <div>
        <Header onAddTodo={handleAddTodo} />
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
      <h1> {isLoading ? "Loading......" : renderContent()} </h1>
    </div>
  );
}

export default App;
