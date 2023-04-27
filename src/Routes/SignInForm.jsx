import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/globalcontext";
import { Button } from "@mui/material";
import styled from "styled-components";
import UploadPhoto from "../assets/Upload_photo.svg";

const SignInForm = () => {
  const { uploadPhoto, user, handleUserChange } = useGlobalContext();
  const isSignIn = user.photo !== "" && user.name !== "";

  return (
    <SignInFormWrapper>
      <label>Get Started</label>
      {user.photo ? (
        <img className="userImage" src={user.photo} alt="user_image" />
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
      <input
        type="text"
        placeholder="your name"
        name="name"
        value={user.name}
        onChange={handleUserChange}
      />
      {isSignIn ? <Link to="/todocart">Sign in</Link> : <span>Sign in</span>}
    </SignInFormWrapper>
  );
};

const SignInFormWrapper = styled.form`
  .upload-btn {
    height: 122px;
    width: 122px;
    border-radius: 50%;
    background-color: gray;
  }
  .userImage {
    height: 68px;
    width: 68px;
    border-radius: 50px;
  }
`;
export default SignInForm;
