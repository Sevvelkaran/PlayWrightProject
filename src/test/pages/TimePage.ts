import { Page } from "@playwright/test";

export default class TimePage {
  constructor(private page: Page) {}

  async navigateToCustomersPage() {
    await this.page.click('text=Time');
    await this.page.click('text=Project Info');
    await this.page.click('text=Customers');
  }

  async isCustomerPresent(name: string): Promise<boolean> {
  try {
    
    await this.page.waitForSelector(`text=${name}`, { timeout: 1000 });
    return await this.page.isVisible(`text=${name}`);
  } catch {
    
    return false;
  }
}

}
