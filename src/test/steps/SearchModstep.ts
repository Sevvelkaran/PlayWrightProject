import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page } from 'playwright';

let page: Page;

Given('I am on the OrangeHRM login page', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I login with valid credentials', async () => {
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForSelector('input[placeholder="Search"]');
});

When('I click on the search bar', async () => {
  await page.click('input[placeholder="Search"]');
});

When('I type {string}', async (text: string) => {
  await page.fill('input[placeholder="Search"]', text);
  await page.waitForTimeout(1000);
});

Then('I should see {string} in the search result', async (expected: string) => {
  const result = page.locator(`.oxd-main-menu-item span:text-is("${expected}")`);
  expect(await result.isVisible()).toBeTruthy();
});
