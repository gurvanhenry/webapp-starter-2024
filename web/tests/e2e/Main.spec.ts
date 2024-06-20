import { test, expect } from "@playwright/test";

test("Simple visit", async ({ page }) => {
  await page.goto("http://localhost:8080");

  await expect(page.getByText(/Welcome/)).toBeVisible();

  await page.getByRole("link", { name: "Bats", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Detete a bat" })
  ).toBeVisible();
});
