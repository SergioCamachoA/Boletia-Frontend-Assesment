import { ReactNode, createContext, useReducer } from "react"

type InitialState = {
  isDropDownOpen: boolean
}
type Payload = {
  isDropDownOpen: boolean
}

type Action = {
  type: string
  payload: Payload
}

const initialState: InitialState = {
  isDropDownOpen: false,
}

const ACTIONS = {
  SET_IS_DROPDOWN_OPEN: "SET_IS_DROPDOWN_OPEN",
}

function reducer(state: InitialState, action: Action) {
  const { isDropDownOpen } = action.payload

  switch (action.type) {
    case ACTIONS.SET_IS_DROPDOWN_OPEN:
      return {
        ...state,
        isDropDownOpen: isDropDownOpen,
      }
    default:
      return state
  }
}

export const GlobalContext = createContext({
  ...initialState,
  setIsDropDownOpen: (isDropDownOpen: boolean) => {},
})

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setIsDropDownOpen = (isDropDownOpen: boolean) => {
    dispatch({
      type: ACTIONS.SET_IS_DROPDOWN_OPEN,
      payload: {
        isDropDownOpen: isDropDownOpen,
      },
    })
  }

  return (
    <GlobalContext.Provider value={{ ...state, setIsDropDownOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}
