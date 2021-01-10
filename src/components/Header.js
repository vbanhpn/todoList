import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";

function Header( {addTodoItem, inputTodo, setInputTodo}) {
  
  return (
    <header className={classes.heading} >
      <h1>To-do Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={inputTodo}
          onChange={(event) => setInputTodo(event.target.value)}
        />
        <button onClick={() => addTodoItem()} >
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}

export default Header;
