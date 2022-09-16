import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Application from "./pages/application";
import Home from "./pages/home";
import PastProjects from "./pages/pastProjects";
import Products from "./pages/products";
import Team from "./pages/team";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/application" element={<Application />} />
            <Route path="/team" element={<Team />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pastProjects" element={<PastProjects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
