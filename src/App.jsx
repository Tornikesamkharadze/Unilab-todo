import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import SignInForm from "./Routes/SignInForm";
import TodoCart from "./Routes/TodoCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="signinform" element={<SignInForm />} />
        <Route path="todocart" element={<TodoCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
