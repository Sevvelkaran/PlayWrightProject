// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { pageFixture } from '../../hooks/pageFixture';
// import Performance2Page from '../pages/Performance2Page';

// let performance2Page: Performance2Page;

// When(
//   'the user navigates to the Performance > Manage Reviews > My Reviews',
//   { timeout: 30_000 },
//   async function () {
//     performance2Page = new Performance2Page(pageFixture.page!);
//     await performance2Page.navigateToMyReviews();
//   }
// );

// Then('the Job Title should be {string} and Review Status should be {string}', async function (job: string, status: string) {
//   await performance2Page.verifyJobTitleAndStatus(job, status);
// });

// When('the user navigates to the Performance > My Trackers', async function () {
//   performance2Page = new Performance2Page(pageFixture.page!); // use '!'
//   await performance2Page.goToPerformanceMenu();
//   await performance2Page.navigateToMyTrackers();
// });

// Then('the correct tracker name should be displayed', async function () {
//   const name = await performance2Page.getMyTrackerName();
//   expect(name?.trim()).toBe('Self Tracker');
// });

// // When('the user navigates to the Performance > Employee Trackers', async function () {
// //   performance2Page = new Performance2Page(pageFixture.page!);
// //   await performance2Page.goToPerformanceMenu();
// //   await performance2Page.navigateToEmployeeTrackers();
// // });
// When(
//   'the user navigates to the Performance > Employee Trackers',
//   { timeout: 30_000 },
//   async function () {
//     performance2Page = new Performance2Page(pageFixture.page!);
//     await performance2Page.goToPerformanceMenu();
//     await performance2Page.navigateToEmployeeTrackers();
//   }
// );


// When('enters valid employee name {string} and includes all records', async function (employee: string) {
//   await performance2Page.searchEmployee(employee);
// });

// When('enters invalid employee name {string} and includes all records', async function (employee: string) {
//   await performance2Page.searchEmployee(employee);
// });

// Then('the employee {string} should be listed in Employee Trackers', async function (expected: string) {
//   await performance2Page.validateEmployeeResult(expected);
// });

// Then('an error message {string} should be displayed', async function (errorMsg: string) {
//   await performance2Page.validateEmployeeError(errorMsg);
// });

// When('clicks on the view button for the employee', async function () {
//   await performance2Page.clickViewButton();
// });

// When('clicks the Add Log button', async function () {
//   await performance2Page.clickAddLog();
// });

// When('enters {string} and {string}', async function (log: string, comment: string) {
//   await performance2Page.enterLogAndComment(log, comment);
// });

// When('clicks on the Save button', async function () {
//   await performance2Page.clickSave();
// });

// Then('the log entry should be added successfully', async function () {
//   await performance2Page.validateLogAdded();
// });



import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import Performance2Page from '../pages/Performance2Page';

let perfPage: Performance2Page;

When('the user navigates to the Performance > Manage Reviews > My Reviews', async function () {
  perfPage = new Performance2Page(pageFixture.page!);
  await perfPage.goToMyReviews();
});

Then('the Job Title should be {string} and Review Status should be {string}', async function (jobTitle: string, reviewStatus: string) {
  const actualJobTitle = await perfPage.getJobTitle();
  const actualReviewStatus = await perfPage.getReviewStatus();

  expect(actualJobTitle).toBe(jobTitle);
  expect(actualReviewStatus).toBe(reviewStatus);
});






// When('the user navigates to the Performance > My Trackers', async function () {
//   perfPage = new Performance2Page(pageFixture.page!);
//   await perfPage.goToMyTrackers();
// });


When('the user navigates to the Performance > My Trackers', async function () {
  const perf = new Performance2Page(this.page);
  await perf.goToMyTrackers();
});

Then('the correct tracker name should be displayed', async function () {
  const trackerName = await perfPage.getMyTrackerName();
  expect(trackerName).toBe('Tracker for paul');
});









When('the user navigates to the Performance > Employee Trackers', async function () {
  perfPage = new Performance2Page(pageFixture.page!);
  await perfPage.goToEmployeeTrackers(); 
});

When('enters valid employee name {string} and includes all records', async function (employeeName: string) {
  await perfPage.searchEmployee(employeeName); 
});

Then('the employee {string} should be listed in Employee Trackers', async function (employeeName: string) {
  const trackerName = await perfPage.getMyTrackerName(); 
  expect(trackerName).toContain(employeeName);
});










When('enters invalid employee name {string} and includes all records', async function (employeeName: string) {
  await perfPage.searchEmployee(employeeName);
});

When('clicks on Search', async function () {
  await perfPage.clickSearchButton(); 
});

Then('an error message {string} should be displayed', async function (expectedError: string) {
  const errorText = await perfPage.getNoRecordMessage();
  expect(errorText).toContain(expectedError);
});












When('clicks on the view button for the employee', async function () {
  await perfPage.clickViewButton();
});

When('clicks the Add Log button', async function () {
  await perfPage.clickAddLogButton();
});

When('enters {string} and {string}', async function (log: string, comment: string) {
  await perfPage.enterLogDetails(log, comment);
});

When('clicks on the Save button', async function () {
  await perfPage.clickSaveButton();
});

Then('the log entry should be added successfully', async function () {
  const successMsg = await perfPage.getLogSuccessMessage();
  expect(successMsg).toContain('3Hours');
});
