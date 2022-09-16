import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
