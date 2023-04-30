import React from "react";
import { useTodoContext } from "../Context/todoContext";
import Deletebtn from "../assets/Delete_btn.svg";
import CompleteBtn from "../assets/completed-btn.svg";
import styled from "styled-components";

const TodoText = () => {
  const { state, removeTodo, togleTodo } = useTodoContext();
  const handleTodoComplete = (id) => togleTodo(id);
  
  return (
    <>
      {state.map((todo) => {
        return (
          <UlTodo key={todo.id} completeTodo={todo.complete}>
            <LiTodoText>{todo.text}</LiTodoText>
            <SvgContainer>
              <img
                src={CompleteBtn}
                onClick={() => handleTodoComplete(todo.id)}
              />
              <img onClick={() => removeTodo(todo.id)} src={Deletebtn} />
            </SvgContainer>
          </UlTodo>
        );
      })}
    </>
  );
};

const UlTodo = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto !important;
  margin-top: 16px !important;
  color: white;
  background: #000000;
  border-radius: 5px;
  max-width: 595px;
  height: 54px;
  width: 90%;
  opacity: ${(props) => (props.completeTodo ? "0.1" : "1")};
`;

const LiTodoText = styled.li`
  padding-left: 24px;
  font-size: 22px;
`;

const SvgContainer = styled.div`
  /*  padding: 12px; */
  display: flex;
  cursor: pointer;
  align-items: center;
  & > img:first-child {
    width: 20px;
    height: 20px;
    padding: 17px;
  }
  & > img:last-child {
    width: 20px;
    height: 20px;
    padding: 17px;
  }
  & > img:first-child:hover {
    background-color: #5efc8d;
    transition: background-color 0.5s ease-out;
    border-radius: 4px;
  }

  & > img:last-child:hover {
    background-color: #fc5e5e;
    transition: background-color 0.5s ease-out;
    border-radius: 4px;
  }
`;

export default TodoText;
