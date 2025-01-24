import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.google.com/");
});

test.describe("Google Search", () => {
  test("Search Man Utd and get Manchester United F.C.", async ({ page }) => {
    await page.getByLabel("Search", { exact: true }).click();
    await page.getByLabel("Search", { exact: true }).fill("man utd");
    await page.goto(
      "https://www.google.com/search?q=man+utd&sca_esv=930b1a445fcfc4df&source=hp&ei=TSpyZ_7AKeqUseMP8aqlWQ&iflsig=AL9hbdgAAAAAZ3I4XeSw71F313sqS3KADrA_uNQIjyzz&ved=0ahUKEwi-m_-v3M6KAxVqSmwGHXFVKQsQ4dUDCA4&uact=5&oq=man+utd&gs_lp=Egdnd3Mtd2l6IgdtYW4gdXRkMgsQLhiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjIF1C1BliVFnACeACQAQCYAV-gAa4FqgEBOLgBA8gBAPgBAZgCCqACzQWoAgrCAgoQABgDGOoCGI8BwgIKEC4YAxjqAhiPAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgsQABiABBixAxiKBcICERAuGIAEGLEDGIMBGNQCGIoFwgIEEAAYA8ICDhAuGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQPCAgsQLhiABBixAxiKBcICCBAuGIAEGLEDwgIXEC4YgAQYsQMYxwEYmAUYmQUYigUYrwHCAgUQLhiABMICCxAuGIAEGNEDGMcBmAMG8QXLlju_CyZUAJIHAjEwoAfLUA&sclient=gws-wiz"
    );
    await expect(page.locator("#rcnt")).toContainText("Manchester United F.C.");
  });

  test("Find the champions of a particular season", async ({ page }) => {
    await page
      .getByRole("tab", { name: "Table" })
      .locator("span")
      .first()
      .click();
    await page.getByRole("button", { name: "Season 2024–" }).click();
    await page
      .getByRole("menuitemradio", { name: "–22" })
      .locator("div")
      .click();
    await expect(page.getByLabel("Man City").getByRole("link")).toContainText(
      "Man Utd"
    );
  });
});