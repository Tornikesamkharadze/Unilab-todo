import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/globalcontext";
import { useNavigate } from "react-router-dom";

const DisplayUser = () => {
  const { user, setUser } = useGlobalContext();
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => setLogOut(!logOut);

  const logOutHandler = () => {
    setUser({ photo: "", name: "" });
    navigate("/");
  };
  return (
    <UserWrapper>
      <p>{user.name}</p>
      {user.photo && (
        <div className="image-container">
          <img src={user.photo} alt="user_photo" onClick={toggleHandler} />
          {logOut && <button onClick={logOutHandler}>Logout</button>}
        </div>
      )}
    </UserWrapper>
  );
};
const UserWrapper = styled.div`
  @media (min-width: 300px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    .image-container {
      display: flex;
      align-items: center;
      button {
        margin-left: 10px;
      }
      img {
        height: 50px;
        width: 50px;
        border-radius: 50px;
      }
    }
  }
  @media (min-width: 500px) {
    gap: 20px;
    .image-container {
      button {
        margin-left: 20px;
      }
      img {
        height: 68px;
        width: 68px;
      }
    }
  }
`;
export default DisplayUser;
