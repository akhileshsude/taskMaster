import React from "react";
import { createRoot } from  "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app.jsx";
import Landing from "./landing.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
