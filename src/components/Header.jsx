import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderWrap className="Header">
        <h1>Redux Blog</h1>
        <Navigation>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="post">Post</Link>
            </li>
          </ul>
        </Navigation>
      </HeaderWrap>
    </div>
  );
};

export default Header;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: white;
  padding: 0 0.5rem;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    align-items: center;
    li {
      padding: 0.5rem 1rem;
      a {
        color: #eee;
        text-decoration: none;
      }
    }
  }
`;
