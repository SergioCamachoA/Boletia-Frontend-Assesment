import styled from "styled-components"

export type ErrorMessageProps = {
  text: string
}

const StyledErrorMessage = styled.p`
  margin: 8px 0;
  font-weight: 800;
  text-align: center;
`

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  text,
}: ErrorMessageProps) => {
  return <StyledErrorMessage>{text}</StyledErrorMessage>
}

export default ErrorMessage
