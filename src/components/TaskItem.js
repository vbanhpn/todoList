import { StarOutlined, StarTwoTone } from "@ant-design/icons";
function TaskItem({
  Id,
  Name,
  DateCreate,
  Favorite,
  IsComplete,
  onChangeComplete,
  onChangeFavorite,
}) {
  function itemFavorite() {
    if (Favorite === true) {
      return <StarTwoTone onClick={() => onChangeFavorite()}></StarTwoTone>;
    } else {
      return <StarOutlined onClick={() => onChangeFavorite()}></StarOutlined>;
    }
  }
  return (
    <ul>
      <li>
        <div className="wrapItem">
          <div>
            <input
              type="checkbox"
              defaultChecked={IsComplete}
              onClick={() => onChangeComplete({ Id })}
            />
            <label> {Name} </label>
          </div>
          <span>{itemFavorite()}</span>
        </div>
      </li>
    </ul>
  );
}
export default TaskItem;
