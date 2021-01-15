/* eslint-disable array-callback-return */
import React from "react";
import ListItem from "./ListItem";
import _ from "lodash";

function InCompleteTask({
  incompleteList,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  const sortedInCompletedListItem = _.orderBy(
    incompleteList,
    ["isFavorite", "createdDate"],
    ["desc", "desc"]
  );
  return (
    <ListItem
      listName={"InCompleted: " + incompleteList.length + " task"}
      renderedItems={sortedInCompletedListItem}
      onChangeCompleteStatus={onChangeCompleteStatus}
      onChangeFavoriteStatus={onChangeFavoriteStatus}
    />
  );
}
export default InCompleteTask;
