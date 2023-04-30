import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/globalcontext";
import { useTodoContext } from "../Context/todoContext";

import { GrClose } from "react-icons/gr";
import styled from "styled-components";

const DisplayUser = () => {
  const { user, setUser } = useGlobalContext();
  const { clearSessionStorage } = useTodoContext();
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => setLogOut(!logOut);

  const logOutHandler = () => {
    setUser({ photo: "", name: "" });
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
            <div className="popup">
              <div className="popup-content">
                <p className="popup-text">
                  <span>note:</span> if you logout entered information will be
                  deleted
                </p>
                <GrClose className="popup-close" onClick={toggleHandler} />
                <button className="popup-logout" onClick={logOutHandler}>
                  Logout
                </button>
              </div>
            </div>
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
    .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popup-content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      padding: 38px;
      border-radius: 10px;
      width: 50%;
      max-width: 500px;
    }
    .popup-text {
      color: black;
      text-align: center;
      margin: 0;
      span {
        color: red;
      }
    }
    .popup-close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 20px;
    }
    .popup-logout {
      margin-top: 20px;
      background-color: #5efc8d;
      font-size: 20px;
      color: black;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
    }
    .popup-logout:hover {
      background-color: black;
      color: white;
      transition: background-color 0.5s ease-out, color 0.9s ease-out;
      border-radius: 4px;
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
