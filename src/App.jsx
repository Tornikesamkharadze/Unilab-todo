import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedSignInForm from "./ProtectedRoutes/ProtectedSignInForm";
import ProtectedTodoCart from "./ProtectedRoutes/ProtectedTodoCart";
import ErrorPage from "./Routes/ErrorPage";
import ProtectedHome from "./ProtectedRoutes/ProtectedHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<ProtectedHome />} />
        <Route path="/signinform" element={<ProtectedSignInForm />} />
        <Route path="/todocart" element={<ProtectedTodoCart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
