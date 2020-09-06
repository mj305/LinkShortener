import React, { useState } from "react";
import styled from "styled-components";

import logo from "../../images/logo.svg";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    position: relative;
    width: initial;
    border-bottom: none;
  }
`;

const Menu1 = styled.nav`
  display: ${(props) => (props.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    /* margin: auto 0 auto auto; */
    position: relative;
    width: initial;
    border-bottom: none;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: grey;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 1.8rem;
  margin: auto 0.5rem auto 0.5rem;
`;

const StyledLink = styled.a`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;

  font-weight: bold;
  color: black;
`;

const StyledLink1 = styled.a`
  padding: 4px 8px;
  display: block;
  text-align: left;
  box-sizing: border-box;
  margin: auto 0;

  font-size: 15px;
  color: black;
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>

      <Menu1>
        <Logo src={logo} alt="logo" />
        <StyledLink1>Features</StyledLink1>
        <StyledLink1>Pricing</StyledLink1>
        <StyledLink1>Resources</StyledLink1>
      </Menu1>

      <Menu open={menuOpen}>
        <StyledLink>SignUp</StyledLink>
        <StyledLink>LogIn</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
