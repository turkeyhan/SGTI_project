import './App.css';
import React, {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import SGTI from "./pages/SGTI";
import Question from "./pages/Question";
import Result from "./pages/Result";

const App = () => {
  
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/SGTI">SGTI</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SGTI" element={<SGTI />}></Route>
        <Route path="/Question" element={<Question />}></Route>
        <Route path="/Result" element={<Result />}></Route>
      </Routes>
    </div>
  );
};

export default App;
