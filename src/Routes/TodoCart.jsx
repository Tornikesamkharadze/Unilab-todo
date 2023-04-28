import React from "react";
import styled from "styled-components";

import { useTodoContext } from "../Context/todoContext";
import Navbar from "../Components/Navbar";
import TodoText from "../Components/TodoText";

const TodoCart = () => {
  const { setNewTodo, newTodo, handleSubmit } = useTodoContext();
  return (
    <>
      <Navbar />
      <TodoWrapper onClick={handleSubmit}>
        <h1>add your Daily tasks</h1>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          placeholder="My Task"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
        <TodoText />
      </TodoWrapper>
    </>
  );
};

const TodoWrapper = styled.form``;
export default TodoCart;
