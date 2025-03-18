import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Envelope from "./components/Envelope";
import Heart from "./components/Heart";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for Envelope */}
        <Route path="/" element={<Envelope />} />

        {/* Route for Heart component */}
        <Route path="/new" element={<Heart />} />
      </Routes>
    </Router>
  );
};

export default App;