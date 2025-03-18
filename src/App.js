import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Envelope from "./components/Envelope";
import Heart from "./components/Heart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Envelope />} /> {/* Default route for Envelope */}
        <Route path="/new" element={<Heart />} /> {/* Route for Heart component */}
      </Routes>
    </Router>
  );
};

export default App;