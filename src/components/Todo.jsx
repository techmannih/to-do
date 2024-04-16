import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        title: input,
        tasks: [],
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTask = (task, todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].tasks.push(task);
    setTodos(newTodos);
  };

  const removeTask = (taskIndex, todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].tasks.splice(taskIndex, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-black">
      <div className="container text-white my-9">
        <h1 className="text-center mt-4">Todo</h1>
        <TaskInput
          input={input}
          setInput={setInput}
          addTodo={addTodo}
        />
        <TaskList
          todos={todos}
          removeTodo={removeTodo}
          addTask={addTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
