import { Locator, Page, expect } from "@playwright/test";

export default class PlaywrightWrapper {
  constructor(private page: Page) {}

  // ✅ Safe locator access (CSS or XPath)
  locator(selector: string): Locator {
    return selector.startsWith("//") ? this.page.locator(`xpath=${selector}`) : this.page.locator(selector);
  }

  // ✅ Navigate to URL
  async goto(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  // ✅ Fill input field
  async fill(selector: string | Locator, value: string) {
    const element = typeof selector === "string" ? this.locator(selector) : selector;
    await element.waitFor({ state: "visible" });
    await element.fill(value);
  }

  // ✅ Click element
  async waitAndClick(selector: string | Locator) {
    const element = typeof selector === "string" ? this.locator(selector) : selector;
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  // ✅ XPath Click (custom shortcut)
  async clickByXpath(xpath: string) {
    const element = this.page.locator(`xpath=${xpath}`);
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  // ✅ XPath Fill (custom shortcut)
  async fillByXpath(xpath: string, value: string) {
    const element = this.page.locator(`xpath=${xpath}`);
    await element.waitFor({ state: "visible" });
    await element.fill(value);
  }

  // ✅ Select option from dropdown by visible text
  async selectByText(selector: string, visibleText: string) {
    const element = this.locator(selector);
    await element.selectOption({ label: visibleText });
  }

  // ✅ Wait for full navigation then click
  async navigateTo(link: string | Locator) {
    const element = typeof link === "string" ? this.locator(link) : link;
    await Promise.all([
      this.page.waitForLoadState("load"),
      element.click(),
    ]);
  }

  // ✅ Expect visibility
  async expectToBeVisible(selector: string | Locator) {
    const element = typeof selector === "string" ? this.locator(selector) : selector;
    await expect(element).toBeVisible({ timeout: 5000 });
  }

  // ✅ Expect to have exact text
  async expectToHaveText(selector: string | Locator, expectedText: string) {
    const element = typeof selector === "string" ? this.locator(selector) : selector;
    await expect(element).toHaveText(expectedText);
  }

  // ✅ Expect to contain text
  async expectToContainText(selector: string | Locator, partialText: string) {
    const element = typeof selector === "string" ? this.locator(selector) : selector;
    await expect(element).toContainText(partialText);
  }
}
