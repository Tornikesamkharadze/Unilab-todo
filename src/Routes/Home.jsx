import React from "react";
import { Link } from "react-router-dom";
import TodoCompletedLogo from "../assets/todocomplited.svg";
import styled from "styled-components";

const Home = () => {
  return (
    <FormWrapper>
      <div>
        <img src={TodoCompletedLogo} alt="completelogo" />
        <h1 className="title">Keep track of daily tasks in life</h1>
        <Link className="start-btn" to="/signinform">
          get started
        </Link>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #000000;
  height: 100vh;
  @media (min-width: 300px) {
    .title {
      color: #ffffff;
      font-size: 34px;
      padding: 46px 0 149px 0;
    }
    .start-btn {
      font-size: 25px;
      color: #000000;
      background-color: #5efc8d;
      padding: 16px 58px 15px 59px;
      border-radius: 4px;
    }
    .start-btn:hover {
      background-color: #ffffff;
      transition: background-color 0.5s ease-out;
    }
  }
  @media (min-width: 800px) {
    .title {
      font-size: 54px;
    }
    .start-btn {
      font-size: 48px;
      padding: 16px 58px 15px 59px;
    }
  }
`;
export default Home;
