import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
// import { rest } from "msw"
// import { setupServer } from "msw/node"
import Calculator from "../../../components/Calculator"

// const server = setupServer(
//   rest.get("http://localhost/api/calculate/*", async (req, res, ctx) => {
//     return res(ctx.json({ result: 12 }))
//   })
// )
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// works only with hardcoded response from server
// test.only("using mock api", async () => {
//   render(<Calculator />)
//   setTimeout(() => {
//     userEvent.click(screen.getByRole("button", { name: /calculate/i }))
//   }, 1000)
//   setTimeout(() => {
//     expect(screen.getByRole("heading").textContent).toBe("12")
//   }, 1500)
// })

test("load and display Calculator component", async () => {
  render(<Calculator />)
  expect(screen.getByLabelText(/first number/i)).toBeInTheDocument()
  expect(screen.getByLabelText("Second Number")).toBeInTheDocument()
  await userEvent.selectOptions(screen.getByRole("combobox"), ["add"])
  expect(screen.getByRole("option", { name: "+" }).selected).toBe(true)
  expect(screen.getByRole("button", { name: /calculate/i })).toBeInTheDocument()
  // console.log(window.document.getElementById("result"))
})
