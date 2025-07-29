// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { pageFixture } from '../../hooks/pageFixture';
// import Performance2Page from '../pages/Performance2Page';

// let perfPage: Performance2Page;

// When('the user navigates to the Performance > Manage Reviews > My Reviews', async function () {
//   perfPage = new Performance2Page(pageFixture.page!);
//   await perfPage.goToMyReviews();
// });

// Then('the Job Title should be {string} and Review Status should be {string}', async function (jobTitle: string, reviewStatus: string) {
//   const actualJobTitle = await perfPage.getJobTitle();
//   const actualReviewStatus = await perfPage.getReviewStatus();

//   expect(actualJobTitle).toBe(jobTitle);
//   expect(actualReviewStatus).toBe(reviewStatus);
// });

// When('the user navigates to the Performance > My Trackers', async function () {
//   const perf = new Performance2Page(this.page);
//   await perf.goToMyTrackers();
// });

// Then('the correct tracker name should be displayed', async function () {
//   const trackerName = await perfPage.getMyTrackerName();
//   expect(trackerName).toBe('Tracker for paul');
// });

// When('the user navigates to the Performance > Employee Trackers', async function () {
//   perfPage = new Performance2Page(pageFixture.page!);
//   await perfPage.goToEmployeeTrackers(); 
// });

// When('enters valid employee name {string} and includes all records', async function (employeeName: string) {
//   await perfPage.searchEmployee(employeeName); 
// });

// Then('the employee {string} should be listed in Employee Trackers', async function (employeeName: string) {
//   const trackerName = await perfPage.getMyTrackerName(); 
//   expect(trackerName).toContain(employeeName);
// });

// When('enters invalid employee name {string} and includes all records', async function (employeeName: string) {
//   await perfPage.searchEmployee(employeeName);
// });

// When('clicks on Search', async function () {
//   await perfPage.clickSearchButton(); 
// });

// Then('an error message {string} should be displayed', async function (expectedError: string) {
//   const errorText = await perfPage.getNoRecordMessage();
//   expect(errorText).toContain(expectedError);
// });

// When('clicks on the view button for the employee', async function () {
//   await perfPage.clickViewButton();
// });

// When('clicks the Add Log button', async function () {
//   await perfPage.clickAddLogButton();
// });

// When('enters {string} and {string}', async function (log: string, comment: string) {
//   await perfPage.enterLogDetails(log, comment);
// });

// When('clicks on the Save button', async function () {
//   await perfPage.clickSaveButton();
// });

// Then('the log entry should be added successfully', async function () {
//   const successMsg = await perfPage.getLogSuccessMessage();
//   expect(successMsg).toContain('3Hours');
// });














import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import Performance2Page from '../pages/Performance2Page';

let perfPage: Performance2Page;

When('the user navigates to the Performance > Manage Reviews > My Reviews', async function () {
  perfPage = new Performance2Page(pageFixture.page!);
  await perfPage.goToMyReviews();
  pageFixture.logger?.info('Navigated to Performance > Manage Reviews > My Reviews');
});

Then('the Job Title should be {string} and Review Status should be {string}', async function (jobTitle: string, reviewStatus: string) {
  const actualJobTitle = await perfPage.getJobTitle();
  const actualReviewStatus = await perfPage.getReviewStatus();

  expect(actualJobTitle).toBe(jobTitle);
  expect(actualReviewStatus).toBe(reviewStatus);
  pageFixture.logger?.info(`Verified Job Title: ${actualJobTitle} and Review Status: ${actualReviewStatus}`);
});

When('the user navigates to the Performance > My Trackers', async function () {
  const perf = new Performance2Page(this.page);
  await perf.goToMyTrackers();
  pageFixture.logger?.info('Navigated to Performance > My Trackers');
});

Then('the correct tracker name should be displayed', async function () {
  const trackerName = await perfPage.getMyTrackerName();
  expect(trackerName).toBe('Tracker for paul');
  pageFixture.logger?.info(`Verified tracker name: ${trackerName}`);
});

When('the user navigates to the Performance > Employee Trackers', async function () {
  perfPage = new Performance2Page(pageFixture.page!);
  await perfPage.goToEmployeeTrackers(); 
  pageFixture.logger?.info('Navigated to Performance > Employee Trackers');
});

When('enters valid employee name {string} and includes all records', async function (employeeName: string) {
  await perfPage.searchEmployee(employeeName); 
  pageFixture.logger?.info(`Entered valid employee name: ${employeeName}`);
});

Then('the employee {string} should be listed in Employee Trackers', async function (employeeName: string) {
  const trackerName = await perfPage.getMyTrackerName(); 
  expect(trackerName).toContain(employeeName);
  pageFixture.logger?.info(`Verified employee "${employeeName}" listed in Employee Trackers`);
});

When('enters invalid employee name {string} and includes all records', async function (employeeName: string) {
  await perfPage.searchEmployee(employeeName);
  pageFixture.logger?.info(`Entered invalid employee name: ${employeeName}`);
});

When('clicks on Search', async function () {
  await perfPage.clickSearchButton(); 
  pageFixture.logger?.info('Clicked on Search button');
});

Then('an error message {string} should be displayed', async function (expectedError: string) {
  const errorText = await perfPage.getNoRecordMessage();
  expect(errorText).toContain(expectedError);
  pageFixture.logger?.info(`Verified error message: ${errorText}`);
});

When('clicks on the view button for the employee', async function () {
  await perfPage.clickViewButton();
  pageFixture.logger?.info('Clicked on View button for employee');
});

When('clicks the Add Log button', async function () {
  await perfPage.clickAddLogButton();
  pageFixture.logger?.info('Clicked on Add Log button');
});

When('enters {string} and {string}', async function (log: string, comment: string) {
  await perfPage.enterLogDetails(log, comment);
  pageFixture.logger?.info(`Entered log: ${log}, comment: ${comment}`);
});

When('clicks on the Save button', async function () {
  await perfPage.clickSaveButton();
  pageFixture.logger?.info('Clicked on Save button');
});

Then('the log entry should be added successfully', async function () {
  const successMsg = await perfPage.getLogSuccessMessage();
  expect(successMsg).toContain('3Hours');
  pageFixture.logger?.info(`Verified log success message: ${successMsg}`);
});
