import { Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class Configurationpage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  private uniqueFieldName = "";
  private uniquereportName="";
  private Elements = {
    pim:"(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]",
    configmenu:"(//span[@class='oxd-topbar-body-nav-tab-item'])[1]",
    optionalfield:"(//a[@class='oxd-topbar-body-nav-tab-link'])[1]",
    showdepreciated:"(//label/span)[1]",
    save:"(//button)[4]",
    custommenu:"(//a[@class='oxd-topbar-body-nav-tab-link'])[2]",
    add:"(//button)[4]",
    fieldname:"(//div/input)[2]",
    screendropdown:"(//div/i)[3]",
    typedropdown:"(//div/i)[4]",
    savecustomfield:"//button[2]",
    verifycutomsave:"(//div[@class='oxd-table-cell oxd-padding-cell'])[2]/div",
    reportingmenu:"(//ul)[4]/li[4]",
    reportingmethodname:"(//div/input)[2]",
    reporttext:"(//div[@class='oxd-table-cell oxd-padding-cell'])[2]/div",
    delete:"(//button)[5]/i",
    confirmdelete:"//div[3]/button[2]",
    reportsave:"(//button)[5]",
  };
  async clickPim(){
    await this.base.waitAndClick(this.Elements.pim);
  }
  async clickConfiguration(){
    await this.base.waitAndClick(this.Elements.configmenu);
  }
  async clickoptionalfield(){
    await this.base.waitAndClick(this.Elements.optionalfield);
  }
  async enableField(){
    await this.base.waitAndClick(this.Elements.showdepreciated);
  }
  async save(){
    await this.base.waitAndClick(this.Elements.save);
  }
  async verifyenabled(){
    const locator = this.page.locator(this.Elements.showdepreciated);
    const isEnabled = await locator.isEnabled();
    if (!isEnabled) {
      throw new Error("Element is not enabled");
    }
    await this.base.waitAndClick(this.Elements.showdepreciated);
     await this.base.waitAndClick(this.Elements.save);
  }
  async clickcustomfield(){
    await this.base.waitAndClick(this.Elements.custommenu);
  }
  async Addcustomfield(){
    await this.base.waitAndClick(this.Elements.add);
    await this.page.waitForTimeout(2000);
  }
  async fillform(){
  this.uniqueFieldName = `Employeeskill_${Date.now()}`;
  await this.base.fill(this.Elements.fieldname,this.uniqueFieldName);
  await this.base.waitAndClick(this.Elements.screendropdown);
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter');
  await this.base.waitAndClick(this.Elements.typedropdown);
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter');
  }
  async savecustomfield(){
    await this.base.waitAndClick(this.Elements.savecustomfield);
  }
  async verifycustomfield(){
  const expected = this.uniqueFieldName;
  let i = 2;
  while (true) {
    const actual = await this.page.locator(`(//div[@class='oxd-table-row oxd-table-row--with-border'])[${i}]//div[@class='oxd-table-cell oxd-padding-cell'][2]`).textContent();
    console.log(actual,expected);
    if (actual?.trim() === expected) {
      expect(actual?.trim()).toBe(expected);
      console.log("Custom field added successfully");
      // await this.page.locator(this.Elements.delete).click(); 
      // await this.page.locator(this.Elements.confirmdelete).click();
      break;
    }
    i++;
  }
  }
  async clickReportingmenu(){
    await this.base.waitAndClick(this.Elements.reportingmenu);
  }
  async enterreportname(){
    await this.base.waitAndClick(this.Elements.add);
    this.uniquereportName = `SummaryReport_${Date.now()}`;
    await this.base.fill(this.Elements.reportingmethodname,this.uniquereportName);
    await this.page.waitForSelector(this.Elements.save, { state: 'visible' });
    await this.base.waitAndClick(this.Elements.reportsave);
  }
  async verifyreport(){
    const expected =this.uniquereportName;
  let i = 2;
  while (true) {
    const xpath = `(//div[@class='oxd-table-row oxd-table-row--with-border'])[${i}]//div[@class='oxd-table-cell oxd-padding-cell'][2]`;
    const actual = await this.page.locator(xpath).textContent();
    if (actual?.trim() === expected) {
      expect(actual.trim()).toBe(expected);
      console.log("Report Added successfully");
      break;
    }
    i++;
  }
  }
}
