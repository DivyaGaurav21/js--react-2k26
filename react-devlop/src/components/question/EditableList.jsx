//create inline Editable list
import React, {useState} from "react";


const todoList = [
    { id: 1, title: "Eat Meal" },
    { id: 2, title: "play football" },
    { id: 3, title: "Read books" },
]

const EditableList = () => {
    const [editId, setEditId] = useState(null);
    const [value, setValue] = useState("");

    const editHandler = (todo) => {
          setEditId(todo.id);
    }

    return (
        <div className="flex flex-col gap-2">
            {todoList.map(todo => (
                <div key={todo.id} className="flex flex-row justify-between items-center border-2 border-black p-2 relative">
                    <p>{todo.title}</p>
                    <div className="flex flex-row gap-1">
                        {editId ? 
                        <div>
                            <input
                              type="text"
                              className="border border-black absolute left-2 top-3"
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                            />
                        </div> :
                        <button className="btn" onClick={() => editHandler(todo)}>Edit</button>
                        }
                        <button className="btn">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EditableList;
