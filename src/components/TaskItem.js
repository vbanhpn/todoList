import { StarOutlined } from "@ant-design/icons";
function TaskItem({name}) {
  return (
    <ul>
      <li>
        <div className="wrapItem">
          <div>
            <input type="checkbox" />
            <label> {name} </label>
          </div>
          <span>
            <StarOutlined />
          </span>
        </div>
      </li>
    </ul>
  );
}
export default TaskItem;
