import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import LoginPage from "../pages/loginpage";

let loginPage: LoginPage;

Given('I want to go to OrangeHRM', async function () {
  const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  await pageFixture.page?.goto(url);
  loginPage = new LoginPage(pageFixture.page!);
});

When('The user enters username {string} and password {string}', async function (username: string, password: string) {
  await loginPage.enterUsernameAndPassword(username, password);
});

When('Clicks on the Login button', async function () {
  await loginPage.clicklogin();
});



When('The user clicks on the Forgot Password link', async function () {
  await loginPage.clickForgot();
});


