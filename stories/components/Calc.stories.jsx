import Calculator from "../../components/Calculator"

export default {
  title: "Components/Calc",
  component: Calculator,
  // argTypes: { handleCalculate: { action: "handleCalculate" } },
}

const Template = (args) => <Calculator {...args} />

export const Calc = Template.bind({})
Calc.args = {
  label: "Calculate",
  size: "medium",
  color: "secondary",
}
