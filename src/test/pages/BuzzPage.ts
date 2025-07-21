import { Page, Locator } from '@playwright/test';

export default class BuzzPage {
  private page: Page;

  private buzzMenu: Locator;
  private postBox: Locator;
  private postButton: Locator;
  private feedMessage: Locator;
  private likeButton: Locator;
  private likeCount: Locator;
  private commentBox: Locator;
  private commentButton: Locator;
  private postedComment: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buzzMenu = page.locator('a.oxd-main-menu-item', { hasText: 'Buzz' });
    this.postBox = page.locator('textarea.oxd-buzz-post-input');
    this.postButton = page.locator('button.oxd-button--main');
    this.feedMessage = page.locator('(//p[@class="oxd-text oxd-text--p orangehrm-buzz-post-body-text"])[1]');
    this.likeButton = page.locator('(//button[contains(@class, "buzz-post-like-button")])[1]');
    this.likeCount = page.locator('(//button[contains(@class, "buzz-post-like-button")]/span)[1]');
    this.commentBox = page.locator('(//input[contains(@class, "comment-input")])[1]');
    this.commentButton = page.locator('(//button[contains(text(), "Comment")])[1]');
    this.postedComment = page.locator('//div[contains(@class, "comment-content")][1]');
    this.errorMessage = page.locator('.oxd-input-group__message');
  }

  async goToBuzzPage() {
    await this.buzzMenu.click();
  }

  async postMessage(message: string) {
    await this.postBox.fill(message);
    await this.postButton.click();
  }

  async getLatestMessage(): Promise<string> {
    const messageLocator = this.feedMessage.first();
    await messageLocator.waitFor({ state: 'visible', timeout: 10000 });
    const message = await messageLocator.textContent();
    return message?.trim() || '';
  }

  async isPostVisible(message: string): Promise<boolean> {
    await this.page.waitForTimeout(3000);
    const post = this.page.locator(`xpath=(//p[@class="oxd-text oxd-text--p orangehrm-buzz-widget-body"])[1]`);
    const text = await post.textContent();
    return text?.trim() === message;
  }

  async getLikeCount(): Promise<number> {
    await this.likeCount.waitFor({ state: 'visible', timeout: 5000 });
    const text = await this.likeCount.textContent();
    return parseInt(text || '0', 10);
  }

  async likeLatestPost(): Promise<void> {
    await this.likeButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.likeButton.click();
  }

  async clickDashboardMenu() {
    await this.page.locator('a.oxd-main-menu-item:has-text("Dashboard")').click();
  }
}
