import { useContext } from "react";

const TodoContext = React.createContext();
const TodoContextProvider = ({ children }) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
const useTodoContext = () => {
  return useContext(TodoContext);
};
export { TodoContext, TodoContextProvider, useTodoContext };
