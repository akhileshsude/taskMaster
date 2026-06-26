import React, { useState, useEffect } from "react";
import ActionBox from "./actionBox.jsx";
import List from "./list.jsx";

export default function App() {


  const [childData, setChildData] = useState("");
  const [editChildData, setEditChildData] = useState("");
  const [editedTask, setEditedTask ] = useState("")

  const sendTask = (task) => {
    setChildData(task);
  }
  const sendEditTask = (task) => {
    setEditChildData(task);
  }
  const edited = (task) =>{
    let a=editChildData
    a.text=task
    setEditedTask(a)
  }


  return (
    <div className="App h-screen relative flex flex-col justify-center items-center place-items-center bg-[#1D1D1D] ">
    <div className="App h-[80vh] relative grid grid-cols-3 place-items-center ">
      <div className="ActionBox  h-full w-full flex items-center justify-center">
        <ActionBox sendtask={sendTask} toEdit={editChildData} edited={edited} />
      </div>
      <div className="TodoList  h-full w-full col-span-2 flex items-center justify-center">
        <List newTask={childData} editTask={sendEditTask} toEdit={editedTask} />
      </div>
    </div>
    </div>
  );
}
