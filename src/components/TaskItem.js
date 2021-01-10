import { StarOutlined, StarTwoTone } from "@ant-design/icons";
function TaskItem({id, name, DateCreate, Favorite, isComplete, onChangeComplete,onChangeFavorite }) { 
  // function onChangeFavorite (id) { 
  //   if(isComplete) return
  //   else
  //   alert("Favorite: "  + id)
  // } 
   function itemFavorite  () {
   if(Favorite === true) {
    return (
      <StarTwoTone onClick = {()=> onChangeFavorite()} ></StarTwoTone>
    )
   }else {
    return (
      <StarOutlined  onClick = {()=> onChangeFavorite()} ></StarOutlined>
    )
   }
  }
  return (
    <ul>
      <li>
        <div className="wrapItem">
          <div>
            <input type="checkbox" 
              defaultChecked = {isComplete}
               onChange = {()=> onChangeComplete({id}) }
              /> <label > {name} </label>
          </div>
          <span>
           {itemFavorite()}   
           {/* <StarTwoTone  onClick = {()=> onChangeFavorite({Favorite})} /> */}
          </span>
        </div>
      </li>
    </ul>
  );
}
export default TaskItem;
