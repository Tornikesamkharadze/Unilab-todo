import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/globalcontext";
import { useTodoContext } from "../Context/todoContext";
import Popup from "./Popup";
import styled from "styled-components";

const DisplayUser = () => {
  const { user, setUser } = useGlobalContext();
  const { clearSessionStorage } = useTodoContext();
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => setLogOut(!logOut);

  const logOutHandler = () => {
    setUser({ photo: "", name: "", isClicked: false });
    clearSessionStorage();
    navigate("/");
  };

  return (
    <UserWrapper>
      <p>{user.name}</p>
      {user.photo && (
        <div className="image-container">
          <img src={user.photo} alt="user_photo" onClick={toggleHandler} />
          {logOut && (
            <Popup
              toggleHandler={toggleHandler}
              logOutHandler={logOutHandler}
            />
          )}
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
      img {
        height: 50px;
        width: 50px;
        border-radius: 50px;
      }
    }
  }
  @media (min-width: 500px) {
    gap: 20px;
    p {
      font-size: 22px;
    }
    .image-container {
      img {
        height: 68px;
        width: 68px;
      }
    }
  }
`;
export default DisplayUser;
