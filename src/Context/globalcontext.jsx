import React, { useContext, useState } from "react";

const initialState = {
  photo: "",
  name: "",
};

const GlobalContext = React.createContext();
const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  console.log(user);
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
  return (
    <GlobalContext.Provider value={{ uploadPhoto, handleUserChange, user }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalContextProvider, useGlobalContext };
