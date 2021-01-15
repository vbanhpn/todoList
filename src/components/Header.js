import classes from "./Header.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header({onAddTodo}) { 
  let [currentItem, setCurrentItem] = useState("") 
  const handleChange = (value)=> {
    setCurrentItem(value)
  } 
  const handleKeydown = (event)=> { 
    if(event.keyCode === 13 && currentItem) {  
      console.log("currentItem", currentItem); 
        onAddTodo(currentItem) 
        setCurrentItem("")
    }
  } 
  return (
    <header className={classes.heading}>
      <h1>To-do Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={currentItem}
          onChange={(event) => handleChange(event.target.value)}  
          onKeyDown = {(event => handleKeydown(event))}
        />
        <button onClick={(event) => onAddTodo(currentItem)}>
          <PlusOutlined />
        </button>
      </div>
    </header>
  );
}
export default Header;
