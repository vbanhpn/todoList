import React from "react";
import { getTaskList } from "./ListTaskItem";
import TaskItem from "./TaskItem";
function CompleteTask({listComplete}) {
  let listcompleteTask = getTaskList();
  // console.log("GetTaskList", listcompleteTask);
  var item = listcompleteTask.filter((p) => p.isComplete === true)
  .sort(({ DateComplete: previous }, { DateComplete: current }) =>current - previous)
  .map((p) => {
    // console.log("TaskItem", p)
    return <TaskItem key={p.id} name={p.Name} isComplete = {true} ></TaskItem>;
  });
  return (
    <div className="completed">
      <section className="listTask">
        <div className="totalComplete">
          <span> Completed: </span>
          <span> {listcompleteTask.length} task </span>
        </div>
        <ul>{item}</ul>
      </section>
    </div>
  );
}

export default CompleteTask;
