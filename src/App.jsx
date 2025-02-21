import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ButtonGradient from "./assets/svg/ButtonGradient";
import EasterEggs from "./components/EasterEggs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/easter-eggs" element={<EasterEggs />} />
    </Routes>
  );
};

export default App;
