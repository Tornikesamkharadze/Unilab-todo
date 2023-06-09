import React from "react";
import { useGlobalContext } from "../Context/globalcontext";
import { Button } from "@mui/material";
import styled from "styled-components";
import UploadPhoto from "../assets/Upload_photo.svg";

const SignInForm = () => {
  const { uploadPhoto, user, handleUserChange, isLogedIn } = useGlobalContext();
  const isSignIn = user.photo !== "" && user.name !== "";

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  return (
    <SignInFormWrapper>
      <div className="form-container">
        <h1>get started</h1>
        <label>add a photo</label>
        {user.photo ? (
          <img className="upload-btn" src={user.photo} alt="user_image" />
        ) : (
          <Button className="upload-btn" variant="contained" component="label">
            <img src={UploadPhoto} alt="upload_icon" />
            <input
              onChange={uploadPhoto}
              name="image"
              hidden
              accept="image/*"
              multiple
              type="file"
            />
          </Button>
        )}
        <label>fill in your name</label>
        <input
          type="text"
          placeholder="your name"
          name="name"
          value={user.name}
          onChange={handleUserChange}
          onKeyDown={handleKeyDown}
          className="user-input"
        />
        {isSignIn ? (
          <button onClick={isLogedIn} className="sign-in">
            Sign in
          </button>
        ) : (
          <span className="sign-in">Sign in</span>
        )}
      </div>
    </SignInFormWrapper>
  );
};

const SignInFormWrapper = styled.form`
  input[type="text"] {
    text-align: center;
    font-size: 22px;
  }
  @media (min-width: 300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #000000;
    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      border-radius: 4px;
      width: 70%;
      height: 70vh;
      min-height: 515px;
      h1 {
        /*   margin: 30px 0 44px 0; */
        margin: 0px 0 22px 0;
        color: #000000;
        font-size: 28px;
      }
    }
    .upload-btn {
      height: 122px;
      width: 122px;
      border-radius: 50%;
      background: #e6ebff;
      /*  margin: 10px 0 53px 0; */
      margin: 10px 0 30px 0;
    }
    .upload-btn:hover {
      background-color: #5efc8d;
    }
    .user-input {
      margin: 16px 0 25px 0;
      border-radius: 4px;
      background: #e6ebff;
      height: 76px;
      width: 70%;
    }
    .sign-in {
      font-size: 19px;
      padding: 11px 77px 10px 77px;
      background-color: #5efc8d;
      border-radius: 4px;
      color: #000000;
      cursor: pointer;
      border: 1px transparent;
    }
    .sign-in:hover {
      background: #000000;
      color: #ffffff;
      transition: background-color 0.5s ease-out, color 0.9s ease-out;
    }
  }
  @media (min-width: 800px) {
    .form-container {
      width: 588px;
      height: 688px;
      h1 {
        margin: 30px 0 44px 0;
        font-size: 48px;
      }
    }
    .user-input {
      width: 487px;
      height: 76px;
    }
    .sign-in {
      font-size: 45px;
    }
    .upload-btn {
      margin: 10px 0 53px 0;
    }
  }
`;

export default SignInForm;
