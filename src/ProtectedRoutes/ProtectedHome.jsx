import React from "react";
import { useGlobalContext } from "../Context/globalcontext";
import { Navigate } from "react-router-dom";
import Home from "../Routes/Home";

const ProtectedHome = () => {
  const { user } = useGlobalContext();
  if (user.isClicked) {
    return <Navigate to="/todocart" />;
  } else {
    return <Home />;
  }
};

export default ProtectedHome;
