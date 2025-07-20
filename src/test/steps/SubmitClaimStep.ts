import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import SubmitClaimPage from "../pages/SubmitClaimPage";
import LoginPage from "../pages/loginpage";
import pageFixture from "../../hooks/pageFixture";

let loginPage: LoginPage;

Given("I am logged into OrangeHRM", { timeout: 20 * 1000 }, async function () {
  pageFixture.loginPage = new LoginPage(pageFixture.page!);
  await pageFixture.loginPage.login("Admin", "admin123");
});

When("I navigate to Submit Claim page", async function () {
  pageFixture.submitClaim = new SubmitClaimPage(pageFixture.page!);
  await pageFixture.submitClaim.navigateToSubmitClaim();
});

When("I select event as {string}", async function (event: string) {
  await pageFixture.submitClaim!.selectEvent(event);
});

// Removed amount and currency entry step

When("I click the Create button", async function () {
  await pageFixture.submitClaim!.clickCreateButton();
});

Then(
  "I should see a {string} error message for currency field",
  async function (expectedMessage: string) {
    const actualMessage = await pageFixture.submitClaim!.getCurrencyFieldError();
    expect(actualMessage).toContain(expectedMessage);
  }
);
