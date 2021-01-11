/* eslint-disable array-callback-return */
import React, { useState } from "react";
import TaskItem from "./TaskItem";
function TaskList({ listTask }) {
  let [listData, setListData] = useState({ list: listTask });
  function maskTasksComplete(id) {
    console.log("id", id);
    // let listTaskCopy  = listTask.find((p) =>  {
    //     if (p.id === id) {
    //       p.isComplete = true;
    //       p.Favorite = false;
    //       p.DateComplete = new Date().getTime();
    //     }
    //   })
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.id === id) {
          p.isComplete = true;
          // p.Favorite = false;
          p.DateComplete = new Date().getTime();
        }
      }),
    });
  }
  function markTasksUncomplete(id) {
    console.log("id", id);
    // let listTaskCopy  = listTask.find((p) =>  {
    //     if (p.id === id) {
    //       p.isComplete = false;
    //       p.DateComplete = "";
    //     }
    //   })
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.id === id) {
          p.isComplete = false;
          p.DateComplete = "";
        }
      }),
    });
  }
  function markTasksFavorite(id) {
    console.log("id", id);
    // let listTaskCopy  = listTask.find((p) =>  {
    //     if (p.id === id && p.isComplete === false) {
    //       console.log("FavoritFirst",  p.Favorite)
    //       p.Favorite =  !p.Favorite;
    //       console.log("FavoritLast",  p.Favorite)
    //     }
    //   })
    // console.log("listTaskCopy", listTaskCopy)
    setListData({
      ...listData,
      list: listTask.find((p) => {
        if (p.id === id && p.isComplete === false) {
          console.log("FavoritFirst", p.Favorite);
          p.Favorite = !p.Favorite;
          console.log("FavoritLast", p.Favorite);
        }
      }),
    });
  }
  // console.log("newlistTask", listTask);
  let listInComplete = listTask.filter((p) => p.isComplete === false);
  let listComplete = listTask.filter((p) => p.isComplete === true);
  console.log("listInComplete", listInComplete);
  console.log("listComplete", listComplete);
  var item = listInComplete
    .sort(
      ({ DateCreate: previous }, { DateCreate: current }) => previous - current
    )
    .sort(({ Favorite: previous }, { Favorite: current }) => current - previous)
    .map((p) => {
      return (
        <TaskItem
          key={p.id}
          id={p.id}
          name={p.Name}
          DateCreate={p.DateCreate}
          Favorite={p.Favorite}
          DateComplete={p.DateComplete}
          isComplete={p.isComplete}
          onChangeComplete={() => maskTasksComplete(p.id)}
          onChangeFavorite={() => markTasksFavorite(p.id)}
        ></TaskItem>
      );
    });
  var itemComplete = listComplete
    .sort(
      ({ DateComplete: previous }, { DateComplete: current }) =>
        current - previous
    )
    .map((p) => {
      return (
        <TaskItem
          key={p.id}
          id={p.id}
          name={p.Name}
          DateCreate={p.DateCreate}
          Favorite={p.Favorite}
          DateComplete={p.DateComplete}
          isComplete={p.isComplete}
          onChangeComplete={() => markTasksUncomplete(p.id)}
          onChangeFavorite={() => markTasksFavorite(p.id)}
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
