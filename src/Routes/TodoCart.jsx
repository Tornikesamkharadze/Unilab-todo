import React from "react";
import { useGlobalContext } from "../Context/globalcontext";

const TodoCart = () => {
  const { user } = useGlobalContext();

  return (
    <div>
      {user.photo && (
        <img
          style={{ width: "100px", height: "100px" }}
          src={user.photo}
          alt="user_image"
        />
      )}
      TodoCart
    </div>
  );
};

export default TodoCart;
