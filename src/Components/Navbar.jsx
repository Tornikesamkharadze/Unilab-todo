import React from "react";
import styled from "styled-components";
import DisplayUser from "./DisplayUser";

const Navbar = () => {
  return (
    <header>
      <NavContainer>
        <div className="nav-center">
          <h1>TO DO</h1>
          <DisplayUser />
        </div>
      </NavContainer>
    </header>
  );
};

const NavContainer = styled.nav`
  @media (min-width: 300px) {
    color: white;
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 98px;
      padding: 0px 28px;
      background: #000000;
    }
  }
  
`;
export default Navbar;
