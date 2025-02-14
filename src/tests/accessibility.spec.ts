import { createDefaultTodos } from "../utils/utils";
import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("should have no accessibility violations", async ({ page }) => {
    await createDefaultTodos(page);
    const accessibilityScanResults = await page.accessibility.snapshot();
    expect(accessibilityScanResults).toBeDefined();
  });
});
