import React from "react"
import NavItem from "./NavItem"

const SampleComponent: React.FC = () => {
  const label = "SAMPLE COMPONENT"
  const navTo = "sample-component"
  return <NavItem navTo={navTo} label={label} className="" />
}

export default SampleComponent
