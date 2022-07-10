import ErrorMessage, { ErrorMessageProps } from "./ErrorMessage"
import { ComponentStory, ComponentMeta } from "@storybook/react"
export default {
  tittle: "ErrorMessage",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  text: "error message",
} as ErrorMessageProps
