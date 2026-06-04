import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Apicalling from "./Apicalling";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Showuser from "./Showuser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Apicalling" element={<Apicalling />} />
      <Route path="/Register" element={<Register/>}/>      
      <Route path="/Login" element={<Login/>}/>      
      <Route path="/showuser" element={<Showuser/>}/>      

    </Routes>
  );
}

export default App;

