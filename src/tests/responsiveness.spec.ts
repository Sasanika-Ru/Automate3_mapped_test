import { createDefaultTodos } from "../utils/utils";
import { test, expect } from "@playwright/test";

test.describe("Responsiveness", () => {
  test("should display correctly on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await createDefaultTodos(page);
    const todoItems = page.getByTestId("todo-item");
    await expect(todoItems).toHaveCount(3);
  });

  test("should display correctly on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await createDefaultTodos(page);
    const todoItems = page.getByTestId("todo-item");
    await expect(todoItems).toHaveCount(3);
  });
});
