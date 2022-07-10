import React from "react"
import styled from "styled-components"
import { laptopScreenCSS } from "../design-system/assets/styles/media-queries"

type SideBarProps = {
  children?: React.ReactNode
}

const StyledSection = styled.section`
  max-height: 90vh;
  width: 218px;
  display: none;
  pointer-events: none;

  ${laptopScreenCSS} {
    display: block;
    pointer-events: all;
  }
`
const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default SideBar
