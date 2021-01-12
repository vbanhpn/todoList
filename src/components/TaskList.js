/* eslint-disable array-callback-return */
import React, { useState } from "react";
import TaskItem from "./TaskItem";
function TaskList({ listTask }) {
  let [listData, setListData] = useState({ list: listTask });
  function maskTasksComplete(id, isComplete) {
    console.log("id", id);
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.Id === id) { 
          if(isComplete) {
            p.IsComplete = isComplete;
            p.CompleteDate = new Date().getTime();
          }
          else {
            p.IsComplete = false;
            p.CompleteDate = "";
          }
         
        }
      }),
    });
  }
  function markTasksFavorite(id) {
    console.log("id", id);
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.Id === id && p.IsComplete === false) {
          console.log("FavoritFirst", p.Favorite);
          p.Favorite = !p.Favorite;
          console.log("FavoritLast", p.Favorite);
        }
      }),
    });
  }
  let listInComplete = listTask.filter((p) => p.IsComplete === false);
  let listComplete = listTask.filter((p) => p.IsComplete === true);
  console.log("listInComplete", listInComplete);
  console.log("listComplete", listComplete);
  var item = listInComplete
    .sort(
      ({ CreateDate: previous }, { CreateDate: current }) => previous - current
    )
    .sort(({ Favorite: previous }, { Favorite: current }) => current - previous)
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
          onChangeComplete={() => maskTasksComplete(p.Id, true)}
          onChangeFavorite={() => markTasksFavorite(p.Id)}
        ></TaskItem>
      );
    });
  var itemComplete = listComplete
    .sort(
      ({ CompleteDate: previous }, { CompleteDate: current }) =>
        current - previous
    )
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
          onChangeComplete={() => maskTasksComplete(p.Id, false)}
          onChangeFavorite={() => markTasksFavorite(p.Id)}
        ></TaskItem>
      );
    });
  return (
    <div>
      <section className="listTask">
        <div className="totalComplete">
          <span> Incompleted: </span>
          <span> {listInComplete.length} task </span>
        </div>
        {item}
      </section>
      <div className="completed">
        <section className="listTask">
          <div className="totalComplete">
            <span> Completed: </span>
            <span> {listComplete.length} task </span>
          </div>
          <ul>{itemComplete}</ul>
        </section>
      </div>
    </div>
  );
}
export default TaskList;
