import "./App.css";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
// new Date().getTime() 
// let listTask = getTaskList();
// console.log("GetTaskList", listTask);
// const TaskLists = () => {
//   listTask.map((p) => {
//     return <TaskItem key = {p.NameTask} name={p.NameTask}></TaskItem>;
//   });
// };
function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <CompleteTask />
    </div>
  );
}

export default App;
