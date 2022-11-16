import Button from "../../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  // argTypes: { handleCalculate: { action: "handleCalculate" } },
}

const Template = (args) => <Button {...args} />

export const ButtonComponent = Template.bind({})
ButtonComponent.args = {
  label: "Calculate",
  size: "medium",
  color: "secondary",
}
