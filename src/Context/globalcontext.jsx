import React, { useContext } from "react";

const GlobalContext = React.createContext();
const GlobalContextProvider = ({ children }) => {
  const addPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setFormValues({
        ...formValues,
        image: reader.result,
      });
    };
  };

  return (
    <GlobalContext.Provider value={{ addPhoto }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalContextProvider, useGlobalContext };
