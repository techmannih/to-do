import React from "react";
import Task from "./Task";

function TaskList({ todos, removeTodo, addTask, removeTask }) {
  return (
    <div>
      <div className="">
        <ul className="list-group d-flex flex-row justify-content-center flex-wrap  ">
          {todos.map((todo, index) => (
            <li
              className="list-group-item m-2 my-5 bg-dark bg-gradiant border rounded  "
              key={index}
            >
              <div className="row">
                <div className="col text-white fw-bold fs-4">{todo.title}</div>
                <div className="col-auto">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => removeTodo(index)}
                  >
                    X
                  </button>
                </div>
                <hr  className="text-white my-2 fw-bold"/>
              </div>
              <Task
                tasks={todo.tasks}
                onAddTask={(task) => addTask(task, index)}
                onRemoveTask={(taskIndex) => removeTask(taskIndex, index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
