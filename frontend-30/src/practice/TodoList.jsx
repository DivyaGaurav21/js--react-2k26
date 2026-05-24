import React, { useState } from "react";

const todoItems = [
  { id: 1, text: "Buy groceries", status: false },
  { id: 2, text: "Walk the dog", status: true },
  { id: 3, text: "Read a book", status: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(todoItems);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      status: false,
    };
    setTodos([newTodoItem, ...todos]);
    setNewTodo("");
  }

  return (
    <div className="p-10">
      <div className="flex flex-row flex-1 flex-grow gap-2">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {todos.map((todo) => (
          <div key={todo.id} className="border p-2 ">
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
