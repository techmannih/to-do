import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer.js';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
