import react, { useState, useEffect } from "react";

export default function ActionBox({ sendtask, toEdit, edited }) {
  const [task, setTask] = useState("");
  const [editingTask, setEditingTask] = useState(false);

  useEffect(() => {
    if (toEdit && typeof toEdit === "object" && toEdit.text) {
      setTask(toEdit.text);
      setEditingTask(true);
    } else {
      setEditingTask(false);
    }
  }, [toEdit]);

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    if (editingTask) {
      edited(task);
      setEditingTask(false);
    } else {
      sendtask(task);
    }

    setTask("");
  };

  return (
    <div className="action-box bg-[#1b1b1bed] rounded-3xl text-gray-300 px-4 h-auto w-full flex flex-col gap-3 border border-gray-700 shadow-2xl font-homush justyify-center py-8">
      <h1 className="text-[1.5vw]  b">Add New Task</h1>
      <input
        type="text"
        placeholder="What do you want to do?"
        className="task-input font-kayana rounded-2xl border border-gray-300 text-gray-300 text-[0.9vw] p-4"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="add-button bg-linear-to-r from-[#2470eb]  to-[#7e26a3] text-[1vw] p-2 rounded-2xl "
        onClick={handleSubmit}
      >
        {" "}
        Add Task{" "}
      </button>
    </div>
  );
}
