import React from "react"
import styled from "styled-components"

export type ButtonProps = {
  className?: string
  label: string
  onClick?: (e?: any) => void
}

const StyledButton = styled.button`
  border-radius: 1rem;
  font-weight: 800;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
`

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={`${className}`}>
      {label}
    </StyledButton>
  )
}

export default Button
