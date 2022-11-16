import React from "react"
import { rest } from "msw"
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"

import Calculator from "../../components/Calculator"

export default {
  title: "Components/Calculator",
  component: Calculator,
  parameters: {
    msw: {
      handlers: [
        rest.get("/api/calculate/*", (req, res, ctx) => {
          if (req.params[0] === "//") {
            return res(
              ctx.status(500, "no params"),
              ctx.json({ message: "no params" })
            )
          }

          const params = req.params[0].split("/")

          if (params.length !== 3 || isNaN(params[1]) || isNaN(params[2])) {
            return res(
              ctx.status(
                500,
                `didn't receive expected params. got: ${req.params}`
              )
            )
          }

          return res(
            ctx.json({
              result: "ok",
            })
          )
        }),
      ],
    },
  },
}

const Template = (args) => <Calculator {...args} />
Template.args = { variant: "contained" }

export const Default = Template.bind({})

export const CalculatorTest = Template.bind({})
export const NoParamsTest = Template.bind({})

// export const Default = () => <Calculator />
CalculatorTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const form = canvasElement.querySelector("#calculator-form")
  await userEvent.type(form.querySelector("#first"), "1")
  await userEvent.type(form.querySelector("#second"), "2")
  await userEvent.selectOptions(form.querySelector("#operation"), ["add"])

  await userEvent.click(canvas.getByRole("button"))

  await waitFor(() => {
    expect(canvasElement.querySelector("#result").innerText).toBe("ok")
  })
}

NoParamsTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const form = canvasElement.querySelector("#calculator-form")
  // await userEvent.type(form.querySelector("#first"), "")
  // await userEvent.type(form.querySelector("#second"), "")
  // await userEvent.selectOptions(form.querySelector("#operation"), ["add"])

  await userEvent.click(canvas.getByRole("button"))

  await waitFor(() => {
    expect(canvasElement.querySelector("#result").innerText).toBe("no params")
  })
}
