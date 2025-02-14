import {
    checkNumberOfCompletedTodosInLocalStorage,
    createDefaultTodos,
    checkNumberOfTodosInLocalStorage
} from "../utils/utils";
import { test, expect } from "@playwright/test";

test.describe("Mark all as completed", () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test("should allow me to mark all items as completed", async ({ page }) => {
    await page.getByLabel("Mark all as complete").check();
    
    await expect(page.getByTestId("todo-item")).toHaveClass([
      "completed",
      "completed",
      "completed",
    ]);
    await checkNumberOfCompletedTodosInLocalStorage(page, 3);
  });
});
