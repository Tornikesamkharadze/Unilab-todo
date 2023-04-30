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
        <label>add your Daily tasks</label>
        <div className="add-todo">
          <input
            type="text"
            name="newTodo"
            value={newTodo}
            placeholder="My Task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">add</button>
        </div>
        <TodoText />
      </TodoWrapper>
    </>
  );
};

const TodoWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 35px 0 27px 0;
  }
  .add-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background: #e6ebff;
    width: 100%;
    height: 76px;
    max-width: 500px;
    box-sizing: border-box;
  }
  input:focus {
    outline: none;
  }
  button {
    background-color: #5efc8d;
    color: black;
    border: none;
    font-size: 32px;
    height: 76px;
    width: 5.9rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
export default TodoCart;
