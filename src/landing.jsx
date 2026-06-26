import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen relative">
      <iframe
        src="https://my.spline.design/datavisualization-grSqC5dBnESLfY70XAQvQXkA/"
        className="h-full w-full index -z-10 absolute"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <div className="text-center p-10 h-screen flex flex-col items-center gap-10">
        <h1 className="text-white text-6xl font-kinken m-10">Task Master</h1>
        <p className="text-white text-xl masheutrial-text absolute top-158 font-homush text-[1.2vw]">
          Organize your tasks and boost your productivity
        </p>
        <Link to="/app" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl absolute top-170 hover:scale-110 transition-transform duration-500 ease-in-out font-homush text-[1.2vw]">
          
            Get started ↗
        </Link>
      </div>
    </div>
  );
}
