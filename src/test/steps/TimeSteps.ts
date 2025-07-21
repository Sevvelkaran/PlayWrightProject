import { Given, When, Then } from "@cucumber/cucumber";
import pageFixture from "../../hooks/pageFixture";
import LoginPage from "../pages/loginpage";
import TimePage from "../pages/TimePage";

Given('I am logged in and navigated to Add Customer page', { timeout: 30000 }, async function () {
  pageFixture.loginPage = new LoginPage(pageFixture.page!);
  await pageFixture.loginPage.login("Admin", "admin123");

  pageFixture.timePage = new TimePage(pageFixture.page!);
  await pageFixture.timePage.navigateToCustomersPage();
});

When('I search for customer {string}', async function (name: string) {
  
  console.log(`Searching for customer: ${name}`);
});

Then('I should NOT see customer {string} in the table', async function (name: string) {
  const found = await pageFixture.timePage!.isCustomerPresent(name);
  if (found) {
    throw new Error(`Customer "${name}" was found in the table but should NOT be present`);
  }
});
