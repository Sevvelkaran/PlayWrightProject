import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import BuzzPage from '../pages/BuzzPage';
import { pageFixture } from '../../hooks/pageFixture';

let buzzPage: BuzzPage;

When('The user navigates to the Buzz page', async function () {
  buzzPage = new BuzzPage(pageFixture.page!);
  await buzzPage.goToBuzzPage();
  pageFixture.logger?.info("Navigated to Buzz page");
});

When('The user posts a message {string}', async function (message: string) {
  await buzzPage.postMessage(message);
  pageFixture.logger?.info(`Posted message: ${message}`);
});

Then('The message {string} should appear in the Buzz feed', { timeout: 15000 }, async function (expectedMessage: string) {
  const actual = await buzzPage.getLatestMessage();
  console.log(`Expected message: ${expectedMessage}, Actual message: ${actual}`);
});

When('the user clicks on Dashboard menu', async function () {
  await buzzPage.clickDashboardMenu();
});

Then('Assert The post to check its pressence', async function () {
  const isVisible = await buzzPage.isPostVisible("Great job team!");
  expect(isVisible).toBe(true);
});










