import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Calculator from "../../../components/Calculator"

test("load and display Calculator component", async () => {
  render(<Calculator />)
  expect(screen.getByLabelText(/first number/i)).toBeInTheDocument()
  expect(screen.getByLabelText("Second Number")).toBeInTheDocument()
  await userEvent.selectOptions(screen.getByRole("combobox"), ["add"])
  expect(screen.getByRole("option", { name: "+" }).selected).toBe(true)
  expect(screen.getByRole("button", { name: /calculate/i })).toBeInTheDocument()
})
