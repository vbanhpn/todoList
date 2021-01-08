import React from "react";
import TaskItem from "./TaskItem";
import {getTaskList}  from "./ListTaskItem";
function TaskList() { 

  let listTask = getTaskList();
  // const [list, setList] = useState(listTask)  
  // const [name, setName] = useState("");
  // function handleChanged(event) {
  //   setName(event.taget.value)
  //  }
  //  function handleAdd () {
  //   const newList = list.concat({name});
  //   setList(newList);
  //  }

console.log("GetTaskList", listTask);
var  item =  listTask.map((p) => {
    console.log("TaskItem", p)
    return <TaskItem key = {p.Name} name={p.Name}></TaskItem>;
  });
  return (
    <section className="listTask">  
    <div className="totalComplete">
          <span> Incompleted: </span>
          <span> {listTask.length} task </span>
        </div>
      {item}
    </section>
  );
}

export default TaskList;
