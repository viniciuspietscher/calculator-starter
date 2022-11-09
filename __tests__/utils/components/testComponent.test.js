import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import TestComponent from "../../../components/TestComponent"

// test.afterEach(cleanup)

test("loads and displays a test component", async () => {
  render(<TestComponent />)

  // await userEvent.click(screen.getByRole("button"))
  // await userEvent.click(screen.getByRole("button"))
  // await userEvent.click(screen.getByRole("button"))
  // await userEvent.click(screen.getByRole("button"))
  // expect(screen.findByText("Hello World 3"))
})
