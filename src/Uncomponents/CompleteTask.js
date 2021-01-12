import React, { useState } from "react";
import TaskItem from "../components/TaskItem";
function CompleteTask({listTaskComplete, markTasksUncomplete}) {   

  // let [listData, setListData] = useState({ list: listTask });
  // // function maskTasksComplete(id) {
  // //   console.log("id", id);
  // //   // let listTaskCopy  = listTask.find((p) =>  {
  // //   //     if (p.Id === id) {
  // //   //       p.IsComplete = true;
  // //   //       p.Favorite = false;
  // //   //       p.CompleteDate = new Date().getTime();
  // //   //     }
  // //   //   })
  // //   setListData({
  // //     ...listData,
  // //     list: listTask.find((p) => {
  // //       if (p.Id === id) {
  // //         p.IsComplete = true;
  // //         p.CompleteDate = new Date().getTime();
  // //       }
  // //     }),
  // //   });
  // // }
  // function markTasksUncomplete(id) {
  //   console.log("id", id);
  //   setListData({
  //     ...listData,
  //     list: listTask.find((p) => {
  //       if (p.Id === id) {
  //         p.IsComplete = false;
  //         p.CompleteDate = "";
  //       }
  //     }),
  //   });
  // }
  // let listComplete = listTaskComplete.filter((p) => p.IsComplete === true);  
  var itemComplete = listTaskComplete
  // .sort(({ CompleteDate: previous }, { CompleteDate: current }) =>current - previous)
  .map((p) => {
    return (
      <TaskItem
        key={p.Id}
        Id={p.Id}
        Name={p.Name}
        CreateDate={p.CreateDate}
        Favorite={p.Favorite}
        CompleteDate={p.CompleteDate}
        IsComplete={p.IsComplete}
        onChangeComplete={() => markTasksUncomplete(p.Id)}
      ></TaskItem>
    );
  });
  return (
    <div className="completed">
        <section className="listTask">
          <div className="totalComplete">
            <span> Completed: </span>
            <span> {listTaskComplete.length} task </span>
          </div>
          <ul>{itemComplete}</ul>
        </section>
      </div>
  );
}

export default CompleteTask;
