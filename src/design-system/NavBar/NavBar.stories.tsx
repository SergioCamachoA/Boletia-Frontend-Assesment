import NavBar from "./NavBar"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import boletiaLogo from "../../assets/public/images/BoletiaLogoOrangePantone.png"
import DropDown from "../DropDown/DropDown"

export default {
  tittle: "NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args}>
    <a href="/">
      <img src={boletiaLogo} alt="Boletia Logo" />
    </a>
    <DropDown />
  </NavBar>
)

export const Primary = Template.bind({})
