import { Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class DashboardPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    usernameInput: '//input[@name="username"]',
    passwordInput: '//input[@name="password"]',
    loginButton: '//button[@type="submit"]',
    clockicon: '//div[@class="orangehrm-attendance-card-bar"]/button',
    timeinsert: '//div[@class="oxd-time-input"]/i',
    out: '//div[@class="oxd-form-actions"]/button',
    arrow: '//div[@class="oxd-time-minute-input"]/i[1]',
    dashboardTitle: "h6:has-text('Dashboard')",
    dashboard: '//a[@href="/web/index.php/dashboard/index"]',
    
    // ✅ Added Time menu link
    timeMenuLink: '//a[@href="/web/index.php/time/viewTimeModule"]'
    
  };

  async enterUsernameAndPassword(username: string, password: string) {
    await this.base.fill(this.Elements.usernameInput, username);
    await this.base.fill(this.Elements.passwordInput, password);
  }

  async clickLogin() {
    await this.base.waitAndClick(this.Elements.loginButton);
  }

  async clickOnClock() {
    await this.base.waitAndClick(this.Elements.clockicon);
  }

  async timeInsert() {
    await this.base.waitAndClick(this.Elements.timeinsert);
  }

  async clickArrow() {
    await this.base.waitAndClick(this.Elements.arrow);
  }

  async punchOut() {
    await this.base.waitAndClick(this.Elements.out);
  }

  async clickDashboard() {
    await this.base.waitAndClick(this.Elements.dashboard);
  }

  // ✅ New method to navigate to Time module
  async navigateToTimeModule() {
    await this.base.waitAndClick(this.Elements.timeMenuLink);
  }

  async assertDashboardTitle(expected: string) {
    const actual = await this.page.locator(this.Elements.dashboardTitle).textContent();
    if (!actual?.includes(expected)) {
      throw new Error(`Expected Dashboard title "${expected}", but got "${actual}"`);
    }
  }
  

  async assertQuickActionVisible(actionText: string) {
    let locator;
    switch (actionText) {
      case "Assign Leave":
      case "Leave List":
      case "Timesheets":
      case "Apply Leave":
      case "My Leave":
      case "My Timesheet":
        locator = this.page.locator(`//p[text()='${actionText}']`);
        break;
      default:
        throw new Error(`Quick Action not recognized: ${actionText}`);
    }

    await locator.waitFor({ state: 'visible', timeout: 5000 });

    const actualText = await locator.textContent();
    if (actualText?.trim() !== actionText) {
      throw new Error(`Quick Action mismatch. Expected: "${actionText}", Found: "${actualText}"`);
    }

    console.log(`${actionText} Asserted`);
  }
}
