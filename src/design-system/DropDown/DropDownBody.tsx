import React from "react"
import styled from "styled-components"
import NavList from "../../components/NavList"

const StyledDropDownBody = styled.div`
  padding: 16px 0;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  background-color: var(--dark-smoke);
`
const DropDownBody: React.FC = () => {
  return (
    <StyledDropDownBody>
      <NavList />
    </StyledDropDownBody>
  )
}

export default DropDownBody
