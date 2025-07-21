import { When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import PerformancePage from '../pages/performancePage';
import { expect } from '@playwright/test';

let performancePage: PerformancePage;

When('the user navigates to the Performance > Trackers page', async function () {
  performancePage = new PerformancePage(pageFixture.page!);
  try {
    await performancePage.goToTrackersMenu();
    await performancePage.clickConfigureAndTrackers();
    pageFixture.logger?.info("Navigated to Performance and Configure and Trackers");
  } catch (error) {
    pageFixture.logger?.error(`Navigation to Performance Trackers failed: ${error}`);
    throw error;
  }
});

When('adds a performance tracker with {string}, {string}, and {string}', async function (
  trackerName: string,
  employeeName: string,
  reviewers: string
) {
  try {
    await performancePage.clickAddTracker();
    await performancePage.enterTrackerDetails(trackerName, employeeName, reviewers);
    await performancePage.clickSave();
    pageFixture.logger?.info(`Entered tracker details: ${trackerName}, ${employeeName}, ${reviewers}`);
  } catch (error) {
    pageFixture.logger?.error(`Failed to add performance tracker: ${error}`);
    throw error;
  }
});

Then('the tracker {string} should be successfully added', async function (trackerName: string) {
  const isAdded = await performancePage.verifyTrackerAdded(trackerName);
  expect(isAdded).toBeTruthy();
  pageFixture.logger?.info(`Tracker "${trackerName}" verified in the table`);
});

Then('the system should display an error message {string}', async function (expectedMessage: string) {
  const actualMessage = await performancePage.getEmployeeRequiredError();
  expect(actualMessage).toContain(expectedMessage);
  pageFixture.logger?.info(`Error message verified: ${actualMessage}`);
});
