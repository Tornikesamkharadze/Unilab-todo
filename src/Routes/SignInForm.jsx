import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/globalcontext";
import { Button } from "@mui/material";
import styled from "styled-components";
import UploadPhoto from "../assets/Upload_photo.svg";

const SignInForm = () => {
  const { uploadPhoto, handleUserChange } = useGlobalContext();
  return (
    <SignInFormWrapper>
      <label>Get Started</label>
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
      <Link to="/todocart">Sign in</Link>
      <input
        type="text"
        placeholder="your name"
        name="name"
        value={name}
        onChange={handleUserChange}
      />
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
`;
export default SignInForm;
