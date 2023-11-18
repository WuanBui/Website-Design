import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
