import React from "react";
import { Routes, Route } from "react-router-dom";
import Envelope from "./components/Envelope";
import Heart from "./components/Heart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Envelope />} />
      <Route path="/new" element={<Heart />} />
    </Routes>
  );
};

export default App;