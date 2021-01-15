import Axios from "axios";
let user = "sylk";
const apiEndpoint = "http://localhost:5000";
const getTodoEndpoint = `${apiEndpoint}/Todo/GetTodos`;
const postAddTodoEndpoint = `${apiEndpoint}/Todo/AddTodo`;
const postChangeCompleteEndpoint = `${apiEndpoint}/Todo/ChangeTaskCompletedState`;
const postChangeFavoriteEndpoint = `${apiEndpoint}/Todo/ChangeTaskFavoriteState`;
export const getTodo = async () => {
  return await Axios.get(getTodoEndpoint, {
    params: {
      user: user,
    },
  });
};
export const addTodo = async (taskName) => {
  return await Axios.post(postAddTodoEndpoint, {
    user: user,
    taskName: taskName,
  });
};
export const changeTaskCompleteState = async (taskId, isCompleted) => {
  return await Axios.post(postChangeCompleteEndpoint, {
    taskId: taskId,
    isCompleted: isCompleted,
  });
};
export const changeTaskFavoriteState = async (taskId, isFavorite) => {
  return await Axios.post(postChangeFavoriteEndpoint, {
    taskId: taskId,
    isFavorite: isFavorite,
  });
};
