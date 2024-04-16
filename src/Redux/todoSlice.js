import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos;

export default todoSlice.reducer;
