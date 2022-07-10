import { useContext } from "react"
import { GlobalContext } from "../App/context/app-context"

export const useAppContext = () => {
  const context = useContext(GlobalContext)
  return context
}
