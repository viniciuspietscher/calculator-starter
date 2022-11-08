const { test, expect } = require("@playwright/test")

test.describe("Basic API testing", () => {
  test("add two integers", async ({ request }) => {
    const result = await request.get("/api/calculate/add/6/6", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 12 })
  })
  test("subtract two integers", async ({ request }) => {
    const result = await request.get("/api/calculate/subtract/6/6", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 0 })
  })
  test("multiply two integers", async ({ request }) => {
    const result = await request.get("/api/calculate/multiply/6/6", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 36 })
  })
  test("divide two integers", async ({ request }) => {
    const result = await request.get("/api/calculate/divide/12/6", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 2 })
  })
  test("can't divide by zero", async ({ request }) => {
    const result = await request.get("/api/calculate/divide/6/0", {})
    expect(result.status(500)).toBeTruthy()
    expect(await result.json()).toEqual({ message: "Can't divide by zero" })
  })
  test("add two floats", async ({ request }) => {
    const result = await request.get("/api/calculate/add/6.3/6.3", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 12.6 })
  })
  test("subtract two floats", async ({ request }) => {
    const result = await request.get("/api/calculate/subtract/6.6/6.3", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 6.6 - 6.3 })
  })
  test("multiply two floats", async ({ request }) => {
    const result = await request.get("/api/calculate/multiply/6.6/6.6", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 6.6 * 6.6 })
  })
  test("divide two floats", async ({ request }) => {
    const result = await request.get("/api/calculate/divide/12.9/3.1", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 12.9 / 3.1 })
  })
})
