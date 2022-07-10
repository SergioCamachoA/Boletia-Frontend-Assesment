import React from "react"
import { useAppContext } from "../../hooks/useAppContext"
import dropdownIcon from "../assets/images/burger.svg"
import closeIcon from "../assets/images/close-icon.svg"

const DropDownHead: React.FC = () => {
  const { isDropDownOpen, setIsDropDownOpen } = useAppContext()

  return (
    <div className="dropdown-head">
      <i
        className="dropdown-icon"
        onClick={() => setIsDropDownOpen(isDropDownOpen ? false : true)}
      >
        <img
          src={isDropDownOpen ? closeIcon : dropdownIcon}
          alt="dropdown icon"
        />
      </i>
    </div>
  )
}

export default DropDownHead
