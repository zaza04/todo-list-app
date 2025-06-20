import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "../features/todos/TodoSlice";
import { loadTodosFromStorage, saveTodosToStorage } from '../utils/localStorage'; // Đảm bảo đường dẫn đúng

const loadedTodosArray = loadTodosFromStorage();

let preloadedState;
if (loadedTodosArray) {
  preloadedState = {
    TodoReducer: loadedTodosArray, // <<< THAY ĐỔI KEY Ở ĐÂY thành "TodoReducer"
  };
}

const store = configureStore({
  reducer: {
    todo: TodosSlice,
    localStorage: preloadedState,
  }
});


store.subscribe(() => {
  const currentState = store.getState();
  // Giả sử state của todos nằm trong currentState.TodoReducer
  if (currentState && currentState.TodoReducer) { // <<< THAY ĐỔI KEY TRUY CẬP Ở ĐÂY
    saveTodosToStorage(currentState.TodoReducer); // <<< THAY ĐỔI KEY TRUYỀN VÀO HÀM LƯU
  } else {
    saveTodosToStorage(currentState.TodoReducer || []);
  }
});

export default store;