import { useEffect } from "react";

export default function List({ newTask, editTask, editedTask, todo, setTodo }) {
  useEffect(() => {
    if (newTask) {
      const newTodo = {
        id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 1,
        text: newTask,
        isCompleted: false,
      };
      setTodo((prev) => [...prev, newTodo]);
    }
  }, [newTask, setTodo]);

  useEffect(() => {
    if (editedTask) {
      setTodo((prev) =>
        prev.map((item) =>
          item.id === editedTask.id ? { ...item, text: editedTask.text } : item,
        ),
      );
    }
  }, [editedTask, setTodo]);

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  return (
    <div className="list p-4">
      <h1 className="text-[2vw] text-[#ffffffda]">My Tasks</h1>
      <br />
      {todo.map((item) => (
        <div
          key={item.id}
          className=" rounded-2xl m-3 p-2 flex items-center justify-between font-kayana bg-[#1b1b1bed] w-[70vw]"
        >
          <div className="flex flex-row px-5 justify-center items-center">
            <input
              type="checkbox"
              checked={item.isCompleted}
              className="peer h-7 w-7 appearance-none rounded-full border-2 checked:border-zinc-600 bg-transparent transition-all duration-200 cursor-pointer border-cyan-400 checked:bg-cyan-400/10 hover:border-zinc-400 "
              onChange={() => toggleComplete(item.id)}
            />
            <h1
              className={`m-2 text-[1.3vw] px-4 p-1 ${item.isCompleted ? "text-gray-400 line-through" : "text-white"}`}
            >
              {item.text}
            </h1>
          </div>

          <div className="flex flex-row gap-5">
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

export function Overview({ todos = [] }) {
  const total = todos.length;
  const completed = todos.filter((item) => item.isCompleted).length;
  const pending = total - completed;

  return (
    <div className="action-box bg-[#1b1b1bed] rounded-3xl px-4 h-auto w-full flex flex-col gap-3 border border-gray-700 shadow-2xl font-homush justify-center py-8">
      <h2 className="text-[1.5vw] mb-3">overview</h2>
      <div className="flex flex-row justify-between">
        <p>Total</p>
        <p>{total}</p>
      </div>

      <hr />
      <div className="flex flex-row justify-between">
        <p>Pending</p>
        <p>{pending}</p>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <p>Completed</p>
        <p>{completed}</p>
      </div>
    </div>
  );
}
