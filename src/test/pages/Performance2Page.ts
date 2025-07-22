// import { Page } from '@playwright/test';

// export default class Performance2Page {
//   private locators = {
//     performanceTab: "//span[text()='Performance']",
//     tabMyReviews: '(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[7]',
//     tabMyReviews2: '(//span[@class="oxd-topbar-body-nav-tab-item"])[2]',
//     linkMyReviews: '(//a[@class="oxd-topbar-body-nav-tab-link"])[2]',
//     jobTitle: '(//div[@class="oxd-table-cell oxd-padding-cell"]//div)[1]',
//     reviewStatus: '(//div[@class="oxd-table-cell oxd-padding-cell"])[6]',
//     tabMyTrackers: '(//a[@class="oxd-topbar-body-nav-tab-item"])[1]',
//     trackerName: '(//div[@class="oxd-table-cell oxd-padding-cell"])[1]',
//     linkEmployeeTrackers: '(//a[@class="oxd-topbar-body-nav-tab-item"])[2]',
//     inputEmployeeName: '//input[contains(@placeholder, "Type for hints...")]',
//     includeCheckbox: '//label[contains(text(), "Include")]/..//input[@type="checkbox"]',
//     searchButton: '//button[@type="submit"]',
//     noRecordMsg: '//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]',
//     viewBtn: '//button[@class="oxd-button oxd-button--medium oxd-button--text orangehrm-left-space oxd-table-cell-action-space"]',
//     addLogBtn: '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]',
//     inputLog: '(//input[@class="oxd-input oxd-input--active"])[2]',
//     inputComment: '//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]',
//     saveBtn: '//button[normalize-space()="Save"]',
//     logSuccessMsg: '//div[@class="orangehrm-employee-tracker-log-header"]'
//   };

//   constructor(private page: Page) {}

//   async goToMyReviews() {
//     await this.page.click(this.locators.tabMyReviews);
//     await this.page.click(this.locators.tabMyReviews2);
//     await this.page.click(this.locators.linkMyReviews);
//   }

//   async getJobTitle() {
//     return (await this.page.locator(this.locators.jobTitle).textContent())?.trim() || '';
//   }

//   async getReviewStatus() {
//     return (await this.page.locator(this.locators.reviewStatus).textContent())?.trim() || '';
//   }

//   async goToMyTrackers() {
//     await this.page.hover(this.locators.performanceTab, { timeout: 10000 });
//     await this.page.click(this.locators.tabMyTrackers, { timeout: 10000 });
//     await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
//   }

//   async getMyTrackerName() {
//     const text = await this.page.locator(this.locators.trackerName).textContent();
//     return text?.trim() || '';
//   }

//   async goToEmployeeTrackers() {
//     await this.page.click(this.locators.performanceTab);
//     await this.page.click(this.locators.linkEmployeeTrackers);
//   }

//   async searchEmployee(name: string) {
//     const nameInput = this.page.locator(this.locators.inputEmployeeName);
//     await nameInput.fill(name);
//     await this.page.waitForTimeout(500);
//     await this.page.keyboard.press('Enter');

//     const checkbox = this.page.locator(this.locators.includeCheckbox);
//     if (await checkbox.isVisible()) {
//       await checkbox.check();
//     }

//     await this.page.locator(this.locators.searchButton).click();
//   }

//   async clickSearchButton() {
//     await this.page.click(this.locators.searchButton);
//   }

//   async getNoRecordMessage() {
//     const errorLocator = this.page.locator(this.locators.noRecordMsg);
//     await errorLocator.waitFor({ state: 'visible', timeout: 3000 });
//     return (await errorLocator.textContent()) || '';
//   }

//   async clickViewButton() {
//     await this.page.click(this.locators.viewBtn);
//   }

//   async clickAddLogButton() {
//     await this.page.click(this.locators.addLogBtn);
//   }

//   async enterLogDetails(log: string, comment: string) {
//     await this.page.locator(this.locators.inputLog).fill(log);
//     await this.page.locator(this.locators.inputComment).fill(comment);
//   }

//   async clickSaveButton() {
//     await this.page.click(this.locators.saveBtn);
//   }

//   async getLogSuccessMessage() {
//     const logHeader = this.page.locator(this.locators.logSuccessMsg).first();
//     await logHeader.waitFor({ state: 'visible', timeout: 3000 });
//     return (await logHeader.textContent()) || '';
//   }
// }





import { Page } from '@playwright/test';

export default class Performance2Page {
  private locators = {
    performanceTab: "//span[text()='Performance']",
    tabMyReviews: '(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[7]',
    tabMyReviews2: '(//span[@class="oxd-topbar-body-nav-tab-item"])[2]',
    linkMyReviews: '(//a[@class="oxd-topbar-body-nav-tab-link"])[2]',
    jobTitle: '(//div[@class="oxd-table-cell oxd-padding-cell"]//div)[1]',
    reviewStatus: '(//div[@class="oxd-table-cell oxd-padding-cell"])[6]',
    tabMyTrackers: '(//a[@class="oxd-topbar-body-nav-tab-item"])[1]',
    trackerName: '(//div[@class="oxd-table-cell oxd-padding-cell"])[1]',
    linkEmployeeTrackers: '(//a[@class="oxd-topbar-body-nav-tab-item"])[2]',
    inputEmployeeName: '//input[contains(@placeholder, "Type for hints...")]',
    includeCheckbox: '//label[contains(text(), "Include")]/..//input[@type="checkbox"]',
    searchButton: '//button[@type="submit"]',
    noRecordMsg: '//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]',
    viewBtn: '//button[@class="oxd-button oxd-button--medium oxd-button--text orangehrm-left-space oxd-table-cell-action-space"]',
    addLogBtn: '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]',
    inputLog: '(//input[@class="oxd-input oxd-input--active"])[2]',
    inputComment: '//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]',
    saveBtn: '//button[normalize-space()="Save"]',
    logSuccessMsg: '//div[@class="orangehrm-employee-tracker-log-header"]'
  };

  constructor(private page: Page) {}

  async goToMyReviews() {
    await this.page.click(this.locators.tabMyReviews);
    await this.page.click(this.locators.tabMyReviews2);
    await this.page.click(this.locators.linkMyReviews);
  }

  async getJobTitle() {
    return await this.page.locator(this.locators.jobTitle).textContent();
  }

  async getReviewStatus() {
    return await this.page.locator(this.locators.reviewStatus).textContent();
  }

  async goToMyTrackers() {
    await this.page.hover(this.locators.performanceTab, { timeout: 10000 });
    await this.page.click(this.locators.tabMyTrackers, { timeout: 10000 });
    await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
  }

  async getMyTrackerName() {
    return await this.page.locator(this.locators.trackerName).textContent();
  }

  async goToEmployeeTrackers() {
    await this.page.click(this.locators.performanceTab);
    await this.page.click(this.locators.linkEmployeeTrackers);
  }

  async searchEmployee(name: string) {
    const nameInput = this.page.locator(this.locators.inputEmployeeName);
    await nameInput.fill(name);
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('Enter');

    const checkbox = this.page.locator(this.locators.includeCheckbox);
    if (await checkbox.isVisible()) {
      await checkbox.check();
    }

    await this.page.locator(this.locators.searchButton).click();
  }

  async clickSearchButton() {
    await this.page.click(this.locators.searchButton);
  }

  async getNoRecordMessage() {
    const errorLocator = this.page.locator(this.locators.noRecordMsg);
    await errorLocator.waitFor({ state: 'visible', timeout: 3000 });
    return await errorLocator.textContent();
  }

  async clickViewButton() {
    await this.page.click(this.locators.viewBtn);
  }

  async clickAddLogButton() {
    await this.page.click(this.locators.addLogBtn);
  }

  async enterLogDetails(log: string, comment: string) {
    await this.page.locator(this.locators.inputLog).fill(log);
    await this.page.locator(this.locators.inputComment).fill(comment);
  }

  async clickSaveButton() {
    await this.page.click(this.locators.saveBtn);
  }

  async getLogSuccessMessage() {
    const logHeader = this.page.locator(this.locators.logSuccessMsg).first();
    await logHeader.waitFor({ state: 'visible', timeout: 3000 });
    return await logHeader.textContent();
  }
}
