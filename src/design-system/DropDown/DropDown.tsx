import React from "react"
import DropDownBody from "./DropDownBody"
import DropDownHead from "./DropDownHead"

export type DropDownProps = {
  isDropDownOpen?: boolean
  setIsDropDownOpen?: (isDropDownOpen: boolean) => void
}
const DropDown: React.FC<DropDownProps> = ({
  isDropDownOpen,
  setIsDropDownOpen,
}) => {
  window.addEventListener("resize", handleResize)
  function handleResize() {
    const width = window.innerWidth
    if (width >= 769 && isDropDownOpen) {
      setIsDropDownOpen!(false)
    }
  }

  return (
    <nav>
      <DropDownHead />
      {isDropDownOpen && <DropDownBody />}
    </nav>
  )
}

export default DropDown
