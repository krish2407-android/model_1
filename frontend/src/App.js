import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Apicalling from "./Apicalling";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Header />} />
      <Route path="/Apicalling" element={<Apicalling />} />
      <Route path="/Register" element={<Register/>}/>      
      <Route path="/Login" element={<Login/>}/>      

    </Routes>
  );
}

export default App;

