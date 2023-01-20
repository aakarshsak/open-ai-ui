import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageAI from "./components/ImageAI";
import FunctionAI from "./components/FunctionAI";
import QAI from "./components/QAI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/image-ai" element={<ImageAI />} />
        <Route path="/function-ai" element={<FunctionAI />} />
        <Route path="/qa-ai" element={<QAI />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
