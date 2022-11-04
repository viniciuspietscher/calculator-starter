import { test, expect } from "@playwright/test"

test("should test add operation", async ({ page }) => {
  await page.goto("/")
  await page.type("#first", "2")
  await page.type("#second", "3")
  await page.click("#operation")
  await page.locator("#operation").selectOption("add")
  await page.click('button[type="submit"]')

  const result = page.locator("#result")
  await expect(result).toContainText("5")
})
