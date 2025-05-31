const initial = [];

const TodoReducer = (state = initial, action) => {
  let newState = [...state];
  switch (action.type) {
    case "ADD_TODO":
      newState = [
        {
          id: Date.now(),
          title: action.info,
          completed: false,
        },
        ...state,
      ];
      return newState;
    case "COMPLETED_TODO":
      newState = newState.map((item) =>
        item.id === action.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      );
      return newState;
    case "DELETE_TODO":
      newState = newState.filter((item) => item.id !== action.id);
      return newState;
    default:
      return state;
  }
};

export default TodoReducer;
