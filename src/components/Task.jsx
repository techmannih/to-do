import React, { useState } from "react";

function Task({ tasks, onAddTask, onRemoveTask }) {
  const [taskInput, setTaskInput] = useState("");
    
  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      setTaskInput(""); 
    }
  };

  return (
    <div>
      <ul className="list-group d-flex my-2">
        {tasks.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between m-1 bg-dark  border rounded text-white"
            key={index}
          >
            {task}
            <button
              className="btn btn-light btn-sm ml-2"
              onClick={() => onRemoveTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="input-group mb-3">
        <input
          type="text"
          // className="form-control bg-dark text-white border rounded"
          className="p-2 text-white bg-dark bg-gradiant border rounded"
          placeholder="Enter Task Name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-light" onClick={handleAddTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
