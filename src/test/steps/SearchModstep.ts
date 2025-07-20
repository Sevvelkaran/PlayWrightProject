import { Given, When, Then } from "@cucumber/cucumber";
import pageFixture from "../../hooks/pageFixture";
import LoginPage from "../pages/loginpage";
import SearchModPage from "../pages/SearchModpage";
//import SearchModPage from "../pages/SearchModPage";

let loginPage: LoginPage;
let searchModPage: SearchModPage;

Given('I am on the OrangeHRM login page', { timeout: 20000 }, async function () {
  await pageFixture.page?.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'networkidle' });
  loginPage = new LoginPage(pageFixture.page!);
});


Given('I login with valid credentials', async function () {
 // this.setTimeout(20000);  // Set timeout to 20 seconds for this step

  await loginPage.enterUsernameAndPassword("Admin", "admin123");
  await loginPage.clicklogin();
  await loginPage.waitForDashboard();
});


When('I click on the search bar', { timeout: 20000 }, async function () {
  searchModPage = new SearchModPage(pageFixture.page!);
  await searchModPage.clickSearchBar();
});

When('I type {string}', { timeout: 20000 }, async function (searchText: string) {
  await searchModPage.typeSearch(searchText);
});

Then('I should see {string} in the search result', { timeout: 20000 }, async function (expectedText: string) {
  await searchModPage.assertResultVisible(expectedText);
});

