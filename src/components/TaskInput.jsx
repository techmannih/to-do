import React from "react";

function TaskInput({ input, setInput, addTodo }) {
  return (
    <div className="row justify-content-center mb-3">
      <div className="col-sm-8 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Enter Todo Name"
          className="p-2 text-white bg-dark bg-gradiant border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="btn btn-light btn-block" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
