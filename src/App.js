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
  function addTodoItem() {
    let newList = [];
    if (inputTodo) {
      // kiem tra trung ten thi khong cho them
      let itemFilter = listData.list.filter((p) => {
        if (p.Name.toUpperCase() === inputTodo.toUpperCase()) {
          console.log("inputTodo", inputTodo.toUpperCase());
          console.log("p.Name", p.Name.toUpperCase());
          return p;
        } else return null;
      });
      console.log("item", itemFilter);
      if (itemFilter.length <= 0) {
        var newTast = {
          id: uuidv4(),
          Name: inputTodo,
          DateCreate: new Date().getTime(),
          Favorite: false,
          isComplete: false,
          DateComplete: "",
        };
        newList = listData.list.concat(newTast);
        setListData({ ...listData, list: newList });
      }
    }
    setInputTodo("");
  }
  return (
    <div className="App">
      <Header
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        addTodoItem={() => addTodoItem()}
      />
      <TaskList listTask={listData.list} />
    </div>
  );
}

export default App;
