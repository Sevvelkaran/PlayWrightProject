import { Given, When, Then } from "@cucumber/cucumber";
import pageFixture from "../../hooks/pageFixture";
import LoginPage from "../pages/loginpage";

let loginPage: LoginPage;

Given('I want to go to OrangeHRM', { timeout: 20000 }, async function () {
  const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  await pageFixture.page?.goto(url, { waitUntil: 'networkidle' });
  loginPage = new LoginPage(pageFixture.page!);
});

When('The user enters username {string} and password {string}', async function (username: string, password: string) {
  await loginPage.enterUsernameAndPassword(username, password);
});

When('Clicks on the Login button', { timeout: 20000 }, async function () {
  await loginPage.clicklogin();
});

When('The user clicks on the Forgot Password link', { timeout: 10000 }, async function () {
  await loginPage.clickForgot();
});

Then('The user should land on the dashboard page', async function () {
  await loginPage.waitForDashboard();
});

Then('An invalid login error message should be displayed', async function () {
  const visible = await loginPage.isErrorMessageVisible();
  if (!visible) {
    throw new Error("Expected an error message for invalid login but none appeared.");
  }
});
