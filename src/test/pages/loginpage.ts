import { Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class LoginPage {
  private page: Page;
  private wrapper: PlaywrightWrapper;

  private usernameInput = '//input[@name="username"]';
  private passwordInput = '//input[@name="password"]';
  private loginButton = '//button[@type="submit"]';
  private forgotPasswordLink = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p';
  private dashboardHeader = "//h6[text()='Dashboard']";
  private errorMessage = "//p[contains(text(),'Invalid') or contains(text(),'credentials')]";

  constructor(page: Page) {
    this.page = page;
    this.wrapper = new PlaywrightWrapper(page);
  }

  // Your existing helper methods
  async enterUsernameAndPassword(username: string, password: string) {
    await this.wrapper.fill(this.usernameInput, username);
    await this.wrapper.fill(this.passwordInput, password);
  }

  async clicklogin() {
    await this.wrapper.waitAndClick(this.loginButton);
  }

  async waitForDashboard(): Promise<void> {
    await this.page.waitForURL(/.*\/dashboard\/.*/, { timeout: 10000 });
    await this.page.locator(this.dashboardHeader).waitFor({ state: "visible", timeout: 10000 });
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return await this.page.locator(this.errorMessage).isVisible({ timeout: 5000 });
  }

  async clickForgot() {
    const forgotLink = this.page.locator(this.forgotPasswordLink);
    await forgotLink.waitFor({ state: 'visible', timeout: 10000 });  
    await forgotLink.click();
  }

  // NEW: Implement the unified login method your step expects
  async login(username: string, password: string): Promise<void> {
    // Go to the login page URL if needed, or assume page is already there
    await this.page.goto("https://opensource-demo.orangehrmlive.com/");

    // Enter credentials
    await this.enterUsernameAndPassword(username, password);

    // Click login button
    await this.clicklogin();

    // Wait until dashboard loads to confirm successful login
    await this.waitForDashboard();
  }
}
