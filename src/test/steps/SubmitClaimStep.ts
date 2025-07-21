import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import SubmitClaimPage from "../pages/SubmitClaimPage";
import { pageFixture } from "../../hooks/pageFixture";
import LoginPage from "../pages/loginpage";
import dashboardpage from "../pages/dashboardpage";

let loginPage: LoginPage;

Given('I want to go to OrangeHRm', { timeout: 20000 }, async function () {
  const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  await pageFixture.page?.goto(url, { waitUntil: 'networkidle' });
  pageFixture.submitClaimPage = new SubmitClaimPage(pageFixture.page!);
});

When('The user enters the Username {string} and Password {string} to login', { timeout: 20000 }, async function (username, password) {
    pageFixture.submitClaimPage = new SubmitClaimPage(pageFixture.page!);
  await pageFixture.submitClaimPage.UnamePwd(username, password);
  }
);

When("I navigate to Submit Claim page",{ timeout: 20000 }, async function () {
  pageFixture.submitClaimPage = new SubmitClaimPage(pageFixture.page!);
  await pageFixture.submitClaimPage.navigateToSubmitClaim();
});

When("I select event as {string}", { timeout: 20000 }, async function (event: string) {
  await pageFixture.submitClaimPage!.selectEvent(event);
});

// Removed amount and currency entry step

When("I click the Create button", { timeout: 20000 }, async function () {
  await pageFixture.submitClaimPage!.clickCreateButton();
});

Then("I should see a {string} error message for currency field", { timeout: 20000 }, async function (expectedMessage: string) {
    const actualMessage = await pageFixture.submitClaimPage!.getCurrencyFieldError();
    expect(actualMessage).toContain(expectedMessage);
  }
);