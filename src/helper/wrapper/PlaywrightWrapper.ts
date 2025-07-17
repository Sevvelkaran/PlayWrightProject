import { Locator, Page, expect } from "@playwright/test";

export default class PlaywrightWrapper {
  constructor(private page: Page) {}

  // ✅ Safe locator access
  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  // ✅ Go to a page
  async goto(url: string) {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  }

  // ✅ Fill input field
  async fill(selector: string | Locator, value: string) {
    const element = typeof selector === "string" ? this.page.locator(selector) : selector;
    await element.waitFor({ state: "visible" });
    await element.fill(value);
  }

  // ✅ Click after wait
  async waitAndClick(selector: string | Locator) {
    const element = typeof selector === "string" ? this.page.locator(selector) : selector;
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  // ✅ Navigate and wait for full load
  async navigateTo(link: string | Locator) {
    const element = typeof link === "string" ? this.page.locator(link) : link;
    await Promise.all([
      this.page.waitForLoadState("load"),
      element.click(),
    ]);
  }

  // ✅ Visibility assertion
  async expectToBeVisible(selector: string | Locator) {
    const element = typeof selector === "string" ? this.page.locator(selector) : selector;
    await expect(element).toBeVisible();
  }

  // ✅ Text assertion
  async expectToHaveText(selector: string | Locator, expectedText: string) {
    const element = typeof selector === "string" ? this.page.locator(selector) : selector;
    await expect(element).toHaveText(expectedText);
  }
}
