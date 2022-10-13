import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Apps from "./pages/apps";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Work from "./pages/work";
import Team from "./pages/team";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/home" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/team" element={<Team />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
