import React, { ReactNode } from "react"
import styled from "styled-components"
import NavList from "../components/NavList"
import { laptopScreenCSS } from "../design-system/assets/styles/media-queries"
import SideBar from "../components/SideBar"

export type PageWithSideBarProps = {
  className?: string
  children?: ReactNode
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  width: 100vw;
  .main-section {
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${laptopScreenCSS} {
    .main-section {
      width: 70vw;
    }
  }
`
const PageWithSideBar: React.FC<PageWithSideBarProps> = ({
  children,
}: PageWithSideBarProps) => {
  return (
    <StyledMain>
      <SideBar>
        <NavList />
      </SideBar>
      <div className="main-section">{children}</div>
    </StyledMain>
  )
}

export default PageWithSideBar
