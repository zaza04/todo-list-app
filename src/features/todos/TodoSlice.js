import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoList = [];

const TodosSlice = createSlice({
  name: "todo",
  
  initialState: todoList,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        name: action.payload,
        completed: false
      }

      // add object mới vào mảng
      state.push(newTodo);
    },
    toggleCompleted: (state, action) => {
      const foundTodo = state.find(todo => todo.id === action.payload);

      if(foundTodo) {
        foundTodo.completed = !foundTodo.completed;
      }
      
    },
    deleteTodo: (state, action) => {
      const foundTodoDelete = state.filter(todo => todo.id !== action.payload);
      return foundTodoDelete;
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo } = TodosSlice.actions;

export default TodosSlice.reducer;