import { Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class LoginPage {
    assertForgotPasswordPage() {
        throw new Error("Method not implemented.");
    }
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        username: "//input[@placeholder='Username']",
        password: "//input[@placeholder='Password']",
        login: "//button[contains(.,'Login')]",
        forgot:  "//p[contains(.,'Forgot your password?')]",
        drop: "//p[@class='oxd-userdropdown-name']",
        logout:"//a[contains(@href, '/web/index.php/auth/logout')]"
    }

    async enterUsernameAndPassword(username: string, password: string) {
        await this.base.locator(this.Elements.username).fill(username);
        await this.base.locator(this.Elements.password).fill(password);
    }
    async clicklogin(){
        await this.base.waitAndClick(this.Elements.login);
    }
    async clickForgot(){
        await this.base.waitAndClick(this.Elements.forgot);
    }
    async clicklogout(){
        await this.base.waitAndClick(this.Elements.drop);
        await this.base.waitAndClick(this.Elements.logout);
    }
    async validateLoginResult(result: string) {
  if (result === "valid login") {
    await this.page.waitForURL("**/dashboard");
    await this.base.expectToBeVisible("//h6[text()='Dashboard']");
  } else if (result === "invalid login") {
    await this.base.expectToHaveText("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']", "Invalid credentials");
  } else if (result === "empty login") {
    await this.base.expectToBeVisible("//span[@class='oxd-input-field-error-message']");
  }
}



}