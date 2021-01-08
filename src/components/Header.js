import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { getTaskList } from "./ListTaskItem";
import TaskItem from "./TaskItem";
function Header() {
  let listTask = getTaskList();
  let [, setList] = useState(listTask);
  let [name, setName] = useState("");
  function handleChange(e) {
    let _name = e.target.value;
    if (_name) {
      setName(_name);
    } else setName("");
    console.log(_name);
  }
  function addTask() {
    var newList = [];
    if (name.length > 0) {
      var newTast = {
        Name: { name },
        DateCreate: new Date().getTime(),
      };
      newList = listTask.concat(newTast);
    }
    setList(newList);
    console.log("newList", newList);
    listTask.map((p) => {
      // console.log("TaskItem", p);
      return <TaskItem key={p.Name} name={p.Name}></TaskItem>;
    });
  }
  return (
    <header className={classes.heading}>
      <h1>To-do Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={name}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => addTask()}>
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}

export default Header;
