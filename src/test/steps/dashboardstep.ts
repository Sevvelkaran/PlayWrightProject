import { Given, Then, When } from "@cucumber/cucumber";
import pageFixture from "../../hooks/pageFixture";
import DashboardPage from "../pages/dashboardpage";

let dashboardpage: DashboardPage;

Given('I want to go into OrangeHRM', { timeout: 20000 }, async function () {
  const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  await pageFixture.page?.goto(url, { waitUntil: 'networkidle' });
  dashboardpage = new DashboardPage(pageFixture.page!);
});

When('The user enters the username {string} and password {string} to login', async function (username, password) {
  await dashboardpage.enterUsernameAndPassword(username, password);
  await dashboardpage.clickLogin();
});

When('The user is on the dashboard and clicks on the clock icon in the Time at Work section', { timeout: 20000 }, async function () {
  await dashboardpage.clickOnClock();
});

When('The user enters the out time and punches out', { timeout: 20000 }, async function () {
  await dashboardpage.timeInsert();
  await dashboardpage.clickArrow();
  await dashboardpage.punchOut();
  await dashboardpage.clickDashboard();
});

Then('Assert that the user is on the Dashboard page', async function () {
  await dashboardpage.assertDashboardTitle('Dashboard');
});

When('The user is on the dashboard and asserts the name Dashboard {string}', async function (expectedTitle: string) {
  await dashboardpage.assertDashboardTitle(expectedTitle);
});

Then('The user asserts all the quick action {string}', async function (quickAction: string) {
  await dashboardpage.assertQuickActionVisible(quickAction);
});
