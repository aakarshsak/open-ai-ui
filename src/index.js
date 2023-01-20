import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageAI from "./components/ImageAI";
import FunctionAI from "./components/FunctionAI";
import QAI from "./components/QAI";
import ProgramAI from "./components/ProgramAI";
import GrammerAI from "./components/GrammerAI";
import TranslateAI from "./components/TranslateAI";
import EmojiAI from "./components/EmojiAI";
import RecipeAI from "./components/RecipeAI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/image-ai" element={<ImageAI />} />
        <Route path="/function-ai" element={<FunctionAI />} />
        <Route path="/qa-ai" element={<QAI />} />
        <Route path="/code-ai" element={<ProgramAI />} />
        <Route path="/grammer-ai" element={<GrammerAI />} />
        <Route path="/translate-ai" element={<TranslateAI />} />
        <Route path="/emoji-ai" element={<EmojiAI />} />
        <Route path="/recipe-ai" element={<RecipeAI />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
