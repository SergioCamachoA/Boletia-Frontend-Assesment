import React from "react"
import NavItem from "./NavItem"

const NewBannerElement: React.FC = () => {
  const label = "NEW BANNER ELEMENT"
  const navTo = "new-banner-element"
  return <NavItem navTo={navTo} label={label} className="" />
}

export default NewBannerElement
