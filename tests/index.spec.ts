import { test, expect } from "@playwright/test";

test("page loads correctly", async ({ page }) => {
  await page.goto("/");
  const title = await page.title();
  expect(title).toBe("Dog Face Development Co - Software Development for the 21st Century");
});
