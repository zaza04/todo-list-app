export const addTodo = (info) => {
  return {
    type: "ADD_TODO",
    info: info,
  };
};

export const completedTodo = (id) => {
  return {
    type: "COMPLETED_TODO",
    id: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};
