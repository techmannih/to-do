import { ADD_TODO, REMOVE_TODO, ADD_TASK, REMOVE_TASK } from "../actions/todoAction";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { title: action.payload, tasks: [] }];
    case REMOVE_TODO:
      return state.filter((_, index) => index !== action.payload);
    case ADD_TASK:
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, tasks: [...todo.tasks, action.payload.task] };
        }
        return todo;
      });
    case REMOVE_TASK:
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, tasks: todo.tasks.filter((_, taskIndex) => taskIndex !== action.payload.taskIndex) };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
