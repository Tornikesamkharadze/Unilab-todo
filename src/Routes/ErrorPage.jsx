import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.gif";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <img
          className="pgnotfound"
          src={pageNotFound}
          alt="pagenotfoundgif"
        ></img>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link className="btn" to={"/"}>
          back home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: hsl(186, 100%, 94%);
  text-align: center;
  h1 {
    font-size: 8rem;
  }
  h3 {
    color: hsl(209, 34%, 30%);
    margin-bottom: 1.5rem;
  }
  .pgnotfound {
    height: 200px;
    width: 200px;
    margin: auto;
  }
  .btn {
    text-transform: uppercase;
    background: hsl(185, 62%, 45%);
    color: hsl(186, 100%, 94%);
    padding: 0.375rem 0.75rem;
    display: inline-block;
    font-weight: 400;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;
export default ErrorPage;
