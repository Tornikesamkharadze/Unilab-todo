import React from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";

const Popup = ({ toggleHandler, logOutHandler }) => {
  return (
    <PopupWrapper className="popup">
      <div className="popup-content">
        <p className="popup-text">
          <span>note:</span> if you logout entered information will be deleted
        </p>
        <GrClose className="popup-close" onClick={toggleHandler} />
        <button className="popup-logout" onClick={logOutHandler}>
          Logout
        </button>
      </div>
    </PopupWrapper>
  );
};

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
export default Popup;
