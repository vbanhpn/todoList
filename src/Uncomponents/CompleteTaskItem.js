import { StarOutlined } from "@ant-design/icons";
function CompleteTaskItem({name}) {
  return (
    <ul>
      <li>
        <div className="wrapItem">
          <div>
            <input type="checkbox" defaultChecked={true} />
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
export default CompleteTaskItem;
