import react, { useState, useEffect } from "react";

export default function List({ newTask, editTask, editedTask }) {
  const [todo, SetTodo] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn C++", isCompleted: false },
    { id: 3, text: "Learn Node JS", isCompleted: false },
  ]);

  useEffect(() => {
    if (newTask) {
      const newTodo = {
        id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 1,
        text: newTask,
        isCompleted: false,
      };
      SetTodo([...todo, newTodo]);
    }
  }, [newTask]);

  useEffect(() => {
    if (editedTask) {
      const updatedTodo = todo.map((item) => {
        if (item.id == editedTask.id) {
          item.text = editedTask.text;
        }
      });
      SetTodo(updatedTodo);
    }
  }, [editedTask]);

  let handleDelete = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    SetTodo(updatedTodo);
  };

  return (
    <div className="list p-4">
      <h1 className="text-5xl m-3 text-[#ffffffda]">To-Do List</h1>
      <br />
      {todo.map((item) => (
        <div
          key={item.id}
          className="bg-gray-400 rounded-2xl m-3 p-2 w-90 flex items-center justify-between"
        >
          <h1 className="m-2 text-2xl">{item.text}</h1>
          <div>
            <button
              className="bg-[#2649ba] p-1 px-2 rounded-xl text-right"
              onClick={() => editTask(item)}
            >
              Edit
            </button>
            <button
              className="bg-[#9f2727] p-1 px-2 rounded-xl text-right"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
