import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { rest } from "msw"
import { setupServer } from "msw/node"
import Calculator from "../../../components/Calculator"

// const server = setupServer(
//   rest.get("/api/calculate/", async (req, res, ctx) => {
//     return res(ctx.json({ result: 12 }))
//     // return res(
//     //   ctx.json({
//     //     username,
//     //     firstName: "John",
//     //   })
//     // )
//   })
// )
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test("using mock api", async () => {
//   server.use(
//     rest.get("/api/calculate/test", (req, res, ctx) => {
//       return res(ctx.json({ result: 12 }))
//     })
//   )

//   render(<Calculator />)
//   // expect(
//   //   screen.getByRole("textbox", { name: /second number/i })
//   // ).toBeInTheDocument()
//   // await userEvent.type(
//   //   screen.getByRole("textbox", { name: /second number/i }),
//   //   "6"
//   // )
//   // expect(screen.getByLabelText("Second Number")).toBe("6")
//   // await userEvent.type(screen.getByLabelText(/second number/i), "6")
//   // await userEvent.selectOptions(screen.getByRole("combobox"), ["add"])
//   // expect(screen.getByRole("option", { name: "+" }).selected).toBe(true)
//   // expect(screen.getByRole("button", { name: /calculate/i })).toBeInTheDocument()
//   await userEvent.click(screen.getByRole("button", { name: /calculate/i }))
//   // console.log(screen.getByRole("heading"))
//   // expect(screen.getByRole("heading")).toBe("12")
// })

test("load and display Calculator component", async () => {
  render(<Calculator />)
  expect(screen.getByLabelText(/first number/i)).toBeInTheDocument()
  expect(screen.getByLabelText("Second Number")).toBeInTheDocument()
  await userEvent.selectOptions(screen.getByRole("combobox"), ["add"])
  expect(screen.getByRole("option", { name: "+" }).selected).toBe(true)
  expect(screen.getByRole("button", { name: /calculate/i })).toBeInTheDocument()
})
