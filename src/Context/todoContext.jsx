import React, { useContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../useReducer/todoReducer";
import { getSessionStorage } from "../utils/helper";

const TodoContext = React.createContext();
const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    todoReducer,
    getSessionStorage("TodoList", [])
  );
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    sessionStorage.setItem("TodoList", JSON.stringify(state));
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      const todos = { id: Date.now(), text: newTodo };
      dispatch({ type: "ADD_TODO", payload: todos });
      setNewTodo("");
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  const clearSessionStorage = () => {
    dispatch({ type: "CLEAR_STORAGE" });
  };

  return (
    <TodoContext.Provider
      value={{
        handleSubmit,
        setNewTodo,
        removeTodo,
        clearSessionStorage,
        newTodo,
        state,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
const useTodoContext = () => {
  return useContext(TodoContext);
};
export { TodoContext, TodoContextProvider, useTodoContext };
