export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: title,
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});

export const addTask = (index, task) => ({
  type: ADD_TASK,
  payload: { index, task },
});

export const removeTask = (index, taskIndex) => ({
  type: REMOVE_TASK,
  payload: { index, taskIndex },
});
