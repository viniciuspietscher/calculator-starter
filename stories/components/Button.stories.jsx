import Button from "../../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: { options: ["small", "medium", "large"], control: { type: "radio" } },
    color: {
      options: ["primary", "secondary", "success", "error"],
      control: { type: "radio" },
    },
    variant: {
      options: ["text", "contained", "outlined", "disabled"],
      control: { type: "radio" },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: "Click me",
  variant: "contained",
  size: "medium",
  color: "primary",
}
