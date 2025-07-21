import { Page } from "@playwright/test";

export default class SubmitClaimPage {
  constructor(private page: Page) {}

  private selectors = {
    usernameInput: '//input[@name="username"]',
    passwordInput: '//input[@name="password"]',
    loginButton: 'button[type="submit"]',
    claimMenu: "//span[text()='Claim']",
    submitClaimLink: "//a[text()='Submit Claim']",
    eventDropdown: "//label[text()='Event']/following::div[@class='oxd-select-wrapper'][1]",
    eventOption: (event: string) => `//div[@role='listbox']//span[text()='${event}']`,
    createButton: "//button[normalize-space()='Create']",
    currencyError: "//label[text()='Currency']/following::span[contains(@class,'oxd-input-field-error-message')]"
  };

   async UnamePwd(username: string, password: string) {
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.fill(this.selectors.passwordInput, password);
    await this.page.click(this.selectors.loginButton);
  }

  async navigateToSubmitClaim() {
    await this.page.click(this.selectors.claimMenu);
    await this.page.click(this.selectors.submitClaimLink);
    await this.page.waitForTimeout(1000); // wait for form to load
  }

  async selectEvent(event: string) {
    await this.page.click(this.selectors.eventDropdown);
    await this.page.click(this.selectors.eventOption(event));
  }

  async clickCreateButton() {
    await this.page.click(this.selectors.createButton);
  }

  async getCurrencyFieldError(): Promise<string> {
    const errorLocator = this.page.locator(this.selectors.currencyError);
    await errorLocator.waitFor({ state: "visible", timeout: 5000 });
    return (await errorLocator.textContent())?.trim() || "";
  }
}