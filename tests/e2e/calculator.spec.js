import { test, expect } from "@playwright/test"

// test.beforeEach(async ({ page }, testInfo) => {
//   test.use({ browserName: "firefox" })
// })

test.describe("Operations values with valid inputs", () => {
  test("Integer Add operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2")
    await page.type("#second", "3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("5")
  })
  test("Integer Subtract operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2")
    await page.type("#second", "3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("1")
  })
  test("Integer Multiply operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2")
    await page.type("#second", "3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("6")
  })
  test("Integer Divide operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2")
    await page.type("#second", "3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${2 / 3}`)
  })

  test("Float number Add operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2.5")
    await page.type("#second", "3.2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${2.5 + 3.2}`)
  })
  test("Float number Subtract operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2.5")
    await page.type("#second", "3.2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${2.5 - 3.2}`)
  })
  test("Float number Multiply operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2.5")
    await page.type("#second", "3.2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${2.5 * 3.2}`)
  })
  test("Float number Divide operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "2.5")
    await page.type("#second", "3.2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${2.5 / 3.2}`)
  })
})

test("Invalid input error messages:", async ({ page }) => {
  const reqObject = {
    operation: "add",
    first: "a",
    second: "3",
  }
  await page.goto("/")
  await page.type("#first", reqObject.first)
  await page.type("#second", reqObject.second)
  await page.click("#operation")
  await page.locator("#operation").selectOption(reqObject.operation)
  await page.click('button[type="submit"]')

  const result = page.locator("#result")
  await expect(result).toContainText(
    `Failed to process query params. Received: ${reqObject.operation},${reqObject.first},${reqObject.second}`
  )
})
