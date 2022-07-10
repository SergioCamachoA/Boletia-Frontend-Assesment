import { Outlet } from "react-router-dom"
import NavBarComponent from "../components/NavBar"

const Layout = () => {
  return (
    <div className="layout">
      <NavBarComponent />
      <Outlet />
    </div>
  )
}
export default Layout
