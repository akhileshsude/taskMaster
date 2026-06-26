import react, { useState, useEffect } from "react";

let editingTask = false;

export default function ActionBox({ sendtask, toEdit, edited }) {
  const [task, setTask] = useState("");

  useEffect(() => {
    setTask(toEdit.text);
    editingTask = true;
    console.log(1,editingTask)
  }, [toEdit]);

  let handleSubmit = (e) => {
    if (editingTask) {
        edited(task)
        editingTask=false
        setTask("");
        console.log(1)

    } else {
      e.preventDefault();
      sendtask(task);
      setTask("");
      console.log(2,editingTask)
    }
  };

  return (
    <div className="action-box h-60 w-150 bg-[#1a1e21] rounded-2xl p-4">
      <h1 className="text-[53px] m-2 text-[#ffffffda] b">Add Task</h1>
      <br />
      <input
        type="text"
        placeholder="Add a new task..."
        className="task-input bg-gray-400 rounded-4xl m-1 p-1 w-120 h-12"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="add-button bg-[#2649ba] p-1 px-5 mx-1 rounded-3xl h-12"
        onClick={handleSubmit}
      >
        {" "}
        Add{" "}
      </button>
    </div>
  );
}
