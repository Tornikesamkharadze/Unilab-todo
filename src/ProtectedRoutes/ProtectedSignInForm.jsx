import React from "react";
import { useGlobalContext } from "../Context/globalcontext";
import { Navigate } from "react-router-dom";
import SignInForm from "../Routes/SignInForm";

const ProtectedSignInForm = () => {
  const { user } = useGlobalContext();
  if (user.isClicked) {
    return <Navigate to="/todocart" />;
  } else {
    return <SignInForm />;
  }
};

export default ProtectedSignInForm;
