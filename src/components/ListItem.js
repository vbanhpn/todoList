/* eslint-disable no-unused-vars */
import React from "react";
import TaskItem from "./TaskItem";
import classes from "./ListItem.module.css";
import _ from "lodash";

export default function ListItem({
  renderedItems,
  listName,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  return (
    <section className={classes.listTask}>
      <h6>{listName}</h6>
      <ul>
        {renderedItems.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onChangeCompleteStatus={onChangeCompleteStatus}
            onChangeFavoriteStatus={onChangeFavoriteStatus}
          />
        ))}
      </ul>
    </section>
  );
}
