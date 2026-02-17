// TODO LIST WITHOUT STATUS

import React, { useState } from "react";

let dummyTodo = [
  { id: 1, title: "take breakfast" },
  { id: 2, title: "play cricket" }
];

const TodoList = () => {

  const [todos, setTodos] = useState(dummyTodo);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("please add todo");
      return;
    }

    if (editId) {
      let editedTodos = todos.map(todo => {
        if (todo.id == editId) {
          return { ...todo, title: inputValue }
        } else {
          return todo;
        }
      })
      setTodos(editedTodos);
      setInputValue("");
      setEditId(null);
      return;
    }

    let newTodo = {
      id: Date.now(),
      title: inputValue
    }
    setTodos(prev => [newTodo, ...prev]);
    setInputValue("");
  }

  const deleteHandler = (Id) => {
    setTodos(todos.filter(todo => todo.id != Id))
  }

  const editHandler = (todo) => {
    setEditId(todo.id);
    setInputValue(todo.title);
  }

  return (
    <div>
        <form className="flex flex-row mb-2">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" type="submit" onClick={addTodoHandler}>{editId ? "Update" : "Add"} Todo</button>
        </form>

      <div className="flex flex-col gap-2">
        {todos.map(todo => (
          <div className="flex flex-row justify-between border-2 border-black p-2">
            <p className="font-bold text-2xl">{todo.title}</p>
            <div>
              <button className="btn" onClick={() => editHandler(todo)}>Edit</button>
              <button className="btn" onClick={() => deleteHandler(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
