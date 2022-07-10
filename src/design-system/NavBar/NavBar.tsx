import React from "react"
import styled from "styled-components"
import { laptopScreenCSS } from "../assets/styles/media-queries"

export type NavBarProps = {
  children?: React.ReactNode
}

const StyledNavBar = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 64px;
  }
  .dropdown-icon {
    margin-right: 16px;
    img {
      height: 20px;
    }
  }
  ${laptopScreenCSS} {
    .dropdown-icon {
      display: none;
      pointer-events: none;
    }
  }
`
const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return <StyledNavBar className="bg-dark-smoke">{children}</StyledNavBar>
}

export default NavBar
