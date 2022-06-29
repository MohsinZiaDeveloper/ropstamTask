import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./src/Components/Navbar";

const MyRoutes = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

export default MyRoutes;
