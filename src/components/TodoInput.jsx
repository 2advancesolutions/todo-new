import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="New todo"
      />
      <button type="submit" aria-label="Add todo">
        Add
      </button>
    </form>
  );
}
