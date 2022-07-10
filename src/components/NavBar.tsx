import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../design-system/NavBar/NavBar"
import boletiaLogo from "../assets/public/images/BoletiaLogoOrangePantone.png"
import DropDown from "../design-system/DropDown/DropDown"
import { useAppContext } from "../hooks/useAppContext"

const NavBarComponent: React.FC = () => {
  const { isDropDownOpen, setIsDropDownOpen } = useAppContext()

  return (
    <NavBar>
      <Link to="/">
        <img src={boletiaLogo} alt="Boletia Logo" />
      </Link>
      <DropDown
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />
    </NavBar>
  )
}

export default NavBarComponent
