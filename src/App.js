/* eslint-disable array-callback-return */
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList"; 
import { useState } from "react";
import { getTaskList } from "./components/ListTaskItem";
import { v4 as uuidv4 } from "uuid";
// new Date().getTime()
function App() {
  let listTask = getTaskList();
  console.log("listTask", listTask);
  let [inputTodo, setInputTodo] = useState("");
  let [listData, setListData] = useState({ list: listTask });
  const checkTaskNameExist = (newTaskName) => {
    let itemFilter = listData.list.find((p) => {
      if (p.Name.toUpperCase() === newTaskName.toUpperCase()) {
        alert("Task: " + newTaskName + " đã tồn tại hệ thống"); 
        setInputTodo("");
      }
    });
    console.log("item", itemFilter);
  };
  function addTodoItem() {
    let newList = [];
    if (inputTodo) {
      if (!checkTaskNameExist(inputTodo)) {
        var newTast = {
          Id: uuidv4(),
          Name: inputTodo,
          CreateDate: new Date().getTime(),
          Favorite: false,
          IsComplete: false,
          CompleteDate: "",
        };
        newList = listData.list.concat(newTast);
        setListData({ ...listData, list: newList });
      }
      setInputTodo("");
    }
  }
  return (
    <div className="App">
      <Header
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        addTodoItem={() => addTodoItem(inputTodo)}
      />
      <TaskList listTask={listData.list} /> 
    </div>
  );
}

export default App;
