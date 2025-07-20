import { Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class SearchModPage {
  private wrapper: PlaywrightWrapper;

  private searchBar = 'input[placeholder="Search"]';
  private resultItem = '.oxd-main-menu-item';

  constructor(private page: Page) {
    this.wrapper = new PlaywrightWrapper(page);
  }

  async clickSearchBar() {
    await this.wrapper.waitAndClick(this.searchBar);
  }

  async typeSearch(text: string) {
    await this.wrapper.fill(this.searchBar, text);
  }

  async assertResultVisible(expectedText: string) {
    const item = this.page.locator(`${this.resultItem} >> text="${expectedText}"`);
    await expect(item).toBeVisible({ timeout: 5000 });
  }
}
