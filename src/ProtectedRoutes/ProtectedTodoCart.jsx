import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../Context/globalcontext";
import TodoCart from "../Routes/TodoCart";

const ProtectedTodoCart = () => {
  const { user } = useGlobalContext();
  if (user.isClicked) {
    return <TodoCart />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedTodoCart;
