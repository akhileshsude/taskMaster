import React, { useState, useEffect } from "react";
import ActionBox from "./actionBox.jsx";
import List from "./list.jsx";
import { Overview } from "./list.jsx";

export default function App() {
  const [childData, setChildData] = useState("");
  const [editChildData, setEditChildData] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn C++", isCompleted: false },
    { id: 3, text: "Learn Node JS", isCompleted: false },
  ]);

  const sendTask = (task) => {
    setChildData(task);
  };
  const sendEditTask = (task) => {
    setEditChildData(task);
  };
  const edited = (task) => {
    let a = editChildData;
    a.text = task;
    setEditedTask(a);
  };



  return (
    <div className="h-screen relative flex flex-col justify-center items-center place-items-center bg-cover bg-center bg-black bg-[url('./assets/bgg.png')] text-gray-300">
      <div className="m-5 w-[95vw] h-[12vh] rounded-3xl bg-[#1b1b1bed] text-white flex items-center justify-between text-3xl font-homush border border-gray-700 shadow-2xl">
        <h1 className="ml-10 px-10"> Task Master</h1>
      </div>
      <div className=" w-[95vw] h-[76vh] relative flex flex-row items-start gap-10 font-homush">
        <div className="flex flex-col w-[25vw] gap-5">
          <div className="ActionBox  h-full w-full flex ">
            <ActionBox
              sendtask={sendTask}
              toEdit={editChildData}
              edited={edited}
            />
          </div>
          <div>
            <Overview todos={todo} />
          </div>
          <div>

          </div>
        </div>

        <div className="TodoList col-span-2 flex">
          <List
            newTask={childData}
            editTask={sendEditTask}
            toEdit={editedTask}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
      </div>
    </div>
  );
}
