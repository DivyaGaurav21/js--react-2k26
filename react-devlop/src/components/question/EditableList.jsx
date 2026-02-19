//CREATE INLINE EDITABLE LIST

import React, { useState } from "react";


const EditableList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Eat Meal" },
        { id: 2, title: "Play Football" },
        { id: 3, title: "Read Books" },
    ]);
    const [inputVal, setInputVal] = useState("");
    const [editId, setEditId] = useState(null);

    const editHandler = (todo) => {
        setEditId(todo.id)
        setInputVal(todo.title)
    }

    const updateHandler = (Id) => {
         if (!inputVal.trim()) return;
        const updatedArr = todos.map(todo => {
            if (todo.id == Id) {
                return { ...todo, title: inputVal }
            } else {
                return todo;
            }
        })
        setTodos(updatedArr);
        setEditId(null);
    }

    const cancelHandler = () => {
        setInputVal("");
        setEditId(null)
    }

    const deleteHandler = (Id) => {
        setTodos(todos.filter(todo => todo.id != Id));
    }

    return <section>
        <div className="flex flex-col gap-2">
            {todos.map((todo => (
                <div key={todo.id} className="flex flex-row justify-between items-center p-2 border border-black">
                    {todo.id === editId ?
                        <input
                            type="text"
                            value={inputVal}
                            className="border border-black p-1"
                            onChange={(e) => setInputVal(e.target.value)}
                            autoFocus
                        />
                        : <p>{todo.title}</p>
                    }
                    <div className="flex flex-row gap-1">
                        {todo.id === editId ?
                            <>
                                <button className="btn" onClick={() => updateHandler(todo.id)}>Update</button>
                                <button className="btn" onClick={cancelHandler}>Cancel</button>
                            </>
                            :
                            <>
                                <button className="btn" onClick={() => editHandler(todo)}>Edit</button>
                                <button className="btn"onClick={() => deleteHandler(todo.id)}>Delete</button>
                            </>
                        }
                    </div>
                </div>
            )))}

        </div>
    </section>;
};

export default EditableList;
