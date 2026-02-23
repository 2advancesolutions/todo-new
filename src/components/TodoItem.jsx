import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <button
        className="toggle-btn"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed ? '✅' : '⬜'}
      </button>
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        🗑️
      </button>
    </li>
  );
}
