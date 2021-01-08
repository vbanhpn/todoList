import React from "react";
import {getCompleteTaskList} from "./ListCompleteTask";
import CompleteTaskItem from "./CompleteTaskItem";
function CompleteTask(props) {
  let listcompleteTask =  getCompleteTaskList();
  console.log("GetTaskList", listcompleteTask);
  var  item =  listcompleteTask.map((p) => {
      console.log("TaskItem", p)
      return <CompleteTaskItem  key = {p.Name}  name={p.Name}></CompleteTaskItem>;
    });
  return (
    <div className="completed">
      <section className="listTask">
        <div className="totalComplete">
          <span> Completed: </span>
          <span> {listcompleteTask.length} task </span>
        </div>
        <ul>
        {item}
        </ul>
      </section>
    </div>
  );
}

export default CompleteTask;
