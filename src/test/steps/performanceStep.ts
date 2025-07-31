// import { When, Then } from '@cucumber/cucumber';
// import { pageFixture } from '../../hooks/pageFixture';
// import PerformancePage from '../pages/performancePage';
// import { expect } from '@playwright/test';
// import { readCSV } from '../../helper/util/csvReader';
// let performancePage: PerformancePage;


// When('the user navigates to the Performance > Trackers page', async function () {
//   performancePage = new PerformancePage(pageFixture.page!);
//   try {
//     await performancePage.goToTrackersMenu();
//     await performancePage.clickConfigureAndTrackers();
//     pageFixture.logger?.info("Navigated to Performance and Configure and Trackers");
//   } catch (error) {
//     pageFixture.logger?.error(`Navigation to Performance Trackers failed: ${error}`);
//     throw error;
//   }
// });

// When('adds a performance tracker with {string}, {string}, and {string}', async function (
//   trackerName: string,
//   employeeName: string,
//   reviewers: string
// ) {
//   try {
//     await performancePage.clickAddTracker();
//     await performancePage.enterTrackerDetails(trackerName, employeeName, reviewers);
//     await performancePage.clickSave();
//     pageFixture.logger?.info(`Entered tracker details: ${trackerName}, ${employeeName}, ${reviewers}`);
//   } catch (error) {
//     pageFixture.logger?.error(`Failed to add performance tracker: ${error}`);
//     throw error;
//   }
// });

// Then('the tracker {string} should be successfully added', async function (trackerName: string) {
//   const isAdded = await performancePage.verifyTrackerAdded(trackerName);
//   pageFixture.logger?.info(`Tracker "${trackerName}" verified in the table`);
// });

// Then('the system should display an error message {string}', async function (expectedMessage: string) {
//   const actualMessage = await performancePage.getEmployeeRequiredError();
//   expect(actualMessage).toContain(expectedMessage);
//   pageFixture.logger?.info(`Error message verified: ${actualMessage}`);
// });









import { When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import PerformancePage from '../pages/performancePage';
import { expect } from '@playwright/test';
import { readCSV } from '../../helper/util/csvReader';

let performancePage: PerformancePage;

When('the user navigates to the Performance > Trackers page', async function () {
  if (!pageFixture.page) {
    throw new Error('Playwright page is not initialized.');
  }

  performancePage = new PerformancePage(pageFixture.page);
  try {
    await performancePage.goToTrackersMenu();
    await performancePage.clickConfigureAndTrackers();
    pageFixture.logger?.info("Navigated to Performance > Configure > Trackers");
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

When('adds a performance tracker using data from {string}', async function (csvFileName: string) {
  if (!pageFixture.page) {
    throw new Error('Playwright page is not initialized.');
  }

  performancePage = new PerformancePage(pageFixture.page);
  const rows = await readCSV(csvFileName);

  for (const row of rows) {
    const trackerName = row["Tracker Name"]?.trim() || '';
    const employeeName = row["Employee Name"]?.trim() || '';
    const reviewers = row["Reviewers"]?.trim() || '';

    await performancePage.clickAddTracker();
    await performancePage.enterTrackerDetails(trackerName, employeeName, reviewers);
    await performancePage.clickSave();
    pageFixture.logger?.info(`Tracker submitted from CSV: ${trackerName}, ${employeeName}, ${reviewers}`);
  }
});

Then('the tracker {string} should be successfully added', async function (trackerName: string) {
  const isAdded = await performancePage.verifyTrackerAdded(trackerName);
  pageFixture.logger?.info(`Tracker "${trackerName}" verified in the table`);
});

Then('the system should display an error message {string}', async function (expectedMessage: string) {
  const actualMessage = await performancePage.getEmployeeRequiredError();
  expect(actualMessage).toContain(expectedMessage);
  pageFixture.logger?.info(`Error message verified: "${actualMessage}"`);
});
