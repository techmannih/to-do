import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Todo from './components/Todo.jsx';
import './index.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
    </Routes>
  );
}

export default App;
