import Button, { ButtonProps } from "./Button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ImageButton = Template.bind({})
export const SideBarButton = Template.bind({})
export const SubmitButton = Template.bind({})

ImageButton.args = {
  label: "image button",
  className: "upload-image-button",
} as ButtonProps

SideBarButton.args = {
  label: "sidebar button",
  className: "side-bar-button text-dark-smoke bg-smoke",
} as ButtonProps

SubmitButton.args = {
  label: "submit button",
  className: "submit-form-button",
} as ButtonProps
