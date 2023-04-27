import React, { useContext, useEffect, useState } from "react";

const initialState = {
  photo: "",
  name: "",
};
const getSessionStorage = () => {
  let storedValues = sessionStorage.getItem("userData");
  return storedValues ? JSON.parse(storedValues) : initialState;
};
const GlobalContext = React.createContext();
const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(getSessionStorage());

  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setUser({ ...user, photo: base64String });
    };
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{ uploadPhoto, handleUserChange, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalContextProvider, useGlobalContext };
