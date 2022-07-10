import React from "react"
import styled from "styled-components"
import BannerNewElement from "./NewBannerElement"
import SampleComponent from "./SampleComponent"

const StyledNavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`

const NavList: React.FC = () => {
  return (
    <StyledNavList>
      <BannerNewElement />
      <SampleComponent />
    </StyledNavList>
  )
}

export default NavList
