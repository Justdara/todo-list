import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [input, setInput] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(input, task.id);
    setInput("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Did you change your mind?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update this Task
      </button>
    </form>
  );
};
