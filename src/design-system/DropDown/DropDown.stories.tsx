import DropDown from "./DropDown"
import { ComponentStory, ComponentMeta } from "@storybook/react"
export default {
  tittle: "DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => (
  <div className="bg-dark-smoke dropdown-container">
    <DropDown {...args} />
  </div>
)

export const Primary = Template.bind({})
