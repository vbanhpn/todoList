/* eslint-disable array-callback-return */
import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";
function CompleteTask({
  completeList,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  const sortedInCompletedListItem = _.orderBy(
    completeList,
    ["CompletedDate"],
    ["desc"]
  );
  return (
    <ListItem
      listName={"Completed: " + completeList.length + " task"}
      renderedItems={sortedInCompletedListItem}
      onChangeCompleteStatus={onChangeCompleteStatus}
      onChangeFavoriteStatus={onChangeFavoriteStatus}
    />
  );
}
export default CompleteTask;
