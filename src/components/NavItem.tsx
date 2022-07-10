import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../design-system/Button/Button"
import { useAppContext } from "../hooks/useAppContext"

export type NavItemProps = {
  className?: string
  label: string
  navTo: string
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  className,
  navTo,
}: NavItemProps) => {
  const navigate = useNavigate()
  const { isDropDownOpen, setIsDropDownOpen } = useAppContext()

  const onClick = () => {
    isDropDownOpen && setIsDropDownOpen(false)
    navigate(`/${navTo}`)
  }
  return (
    <div className={className}>
      <Button onClick={onClick} label={label} className="side-bar-button" />
    </div>
  )
}

export default NavItem
