import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">📝 Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        {todos.length > 0 && (
          <p className="summary">
            {remaining} task{remaining !== 1 ? 's' : ''} remaining
          </p>
        )}
      </div>
    </div>
  );
}
