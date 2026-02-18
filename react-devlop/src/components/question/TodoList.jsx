// // TODO LIST WITHOUT STATUS

// import React, { useState } from "react";

// let dummyTodo = [
//   { id: 1, title: "take breakfast" },
//   { id: 2, title: "play cricket" }
// ];

// const TodoList = () => {

//   const [todos, setTodos] = useState(dummyTodo);
//   const [inputValue, setInputValue] = useState("");
//   const [editId, setEditId] = useState(null);

//   const addTodoHandler = (e) => {
//     e.preventDefault();

//     if (!inputValue) {
//       alert("please add todo");
//       return;
//     }

//     if (editId) {
//       let editedTodos = todos.map(todo => {
//         if (todo.id == editId) {
//           return { ...todo, title: inputValue }
//         } else {
//           return todo;
//         }
//       })
//       setTodos(editedTodos);
//       setInputValue("");
//       setEditId(null);
//       return;
//     }

//     let newTodo = {
//       id: Date.now(),
//       title: inputValue
//     }
//     setTodos(prev => [newTodo, ...prev]);
//     setInputValue("");
//   }

//   const deleteHandler = (Id) => {
//     setTodos(todos.filter(todo => todo.id != Id))
//   }

//   const editHandler = (todo) => {
//     setEditId(todo.id);
//     setInputValue(todo.title);
//   }

//   return (
//     <div>
//         <form className="flex flex-row mb-2">
//           <input
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button className="btn" type="submit" onClick={addTodoHandler}>{editId ? "Update" : "Add"} Todo</button>
//         </form>

//       <div className="flex flex-col gap-2">
//         {todos.map(todo => (
//           <div className="flex flex-row justify-between border-2 border-black p-2">
//             <p className="font-bold text-2xl">{todo.title}</p>
//             <div>
//               <button className="btn" onClick={() => editHandler(todo)}>Edit</button>
//               <button className="btn" onClick={() => deleteHandler(todo.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodoList;


// --------------

// TODO LIST WITH STATUS

import React, { useState } from "react";

const dummyTodos = [
  { id: 1, title: "take morning meal", status: true },
  { id: 2, title: "play cricket at field", status: false },
  { id: 3, title: "take bath", status: true }
];

const TodoList = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      alert("please add todo");
      return;
    }

    if (editId) {
      let updatedTodoArr = todos.map(todo => {
        if (todo.id == editId) {
          return { ...todo, title: inputValue }
        } else {
          return todo;
        }
      })
      setTodos(updatedTodoArr);
      setInputValue("");
      setEditId(null);
      return;
    }

    let newTodo = {
      id: Date.now(),
      title: inputValue,
      status: false
    }
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  }

  const checkHandler = (Id) => {
    let updateStatus = todos.map(todo => {
      if (todo.id == Id) {
        return { ...todo, status: !todo.status }
      } else {
        return todo;
      }
    })
    setTodos(updateStatus)
  }
  const editTodoHandler = (todo) => {
    setEditId(todo.id);
    setInputValue(todo.title);
  }
  const deleteHandler = (Id) => {
    setTodos(todos.filter(todo => todo.id != Id))
  }

  return (
    <div>
      <form className="flex flex-row gap-1 mb-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-black w-96"
        />
        <button className="btn" type="submit" onClick={addTodoHandler}>{editId ? "Update" : "Add"}  Todo</button>
      </form>

      <div className="flex flex-col gap-2">
        {todos.map(todo => (
          <div key={todo.id} className="flex flex-row justify-between items-center p-2 border-2 border-black">
            <div className="flex flex-row gap-1">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => checkHandler(todo.id)}
                className="w-7 h-7 accent-black"
              />
              <p>{todo.title}</p>
            </div>
            <div className="flex flex-row gap-1">
              <button className="btn" onClick={() => editTodoHandler(todo)}>Edit</button>
              <button className="btn" onClick={() => deleteHandler(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
