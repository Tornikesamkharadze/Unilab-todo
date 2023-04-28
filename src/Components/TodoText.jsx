import React from "react";
import { useTodoContext } from "../Context/todoContext";

const TodoText = () => {
  const { state, removeTodo } = useTodoContext();
  return (
    <>
      {state.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default TodoText;
