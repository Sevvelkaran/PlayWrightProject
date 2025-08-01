import { Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class PIMPage{
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  private Elements = {
    pimmenu: "(//a/child::span)[2]",
    add: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']",
    firstname: "//input[@name='firstName']",
    lastname: "//input[@name='lastName']",
    id: "(//input[@class='oxd-input oxd-input--active'])[2]",
    save: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
    reportto:"//a[text()='Report-to']",
    supervisoradd:"(//h6/following::button)[3]",
    supervisorname:"(//div[@class='oxd-autocomplete-text-input--before']/following::input)[1]",
    superdropdown:"//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']",

  };
async clickAdd() {
    await this.page.click(this.Elements.add);
  }

  async FillForm(Firstname: string, Lastname: string, Employeeid: string) {
    const uniqueEmpId = Employeeid + Math.floor(Math.random() * 1000).toString();
    await this.page.fill(this.Elements.firstname,Firstname);
    await this.page.fill(this.Elements.lastname,Lastname);
    await this.page.fill(this.Elements.id,uniqueEmpId);
  }

  async clicksave() {
    await this.page.click(this.Elements.save);
  }
  async clickReportto(){
    await this.page.click(this.Elements.reportto);
  }
  async clickSupervisorAdd(){
    await this.page.click(this.Elements.supervisoradd);
  }
  async fillsupervisordata(name:string,method:string){
   await this.page.fill(this.Elements.supervisorname,name);
   await this.page.keyboard.press('ArrowDown');
   await this.page.keyboard.press('Enter'); 
   await this.page.click(this.Elements.superdropdown);
   await this.page.keyboard.press('ArrowDown');
   await this.page.keyboard.press('Enter'); 
  }
}
