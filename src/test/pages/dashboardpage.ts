import { Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";

export default class LoginPage {
    assertForgotPasswordPage() {
        throw new Error("Method not implemented.");
    }
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    private Elements = {

        clockicon : "//p[text()='Punch In']/following::button[1]",
        timeinsert: "//label[text()='Time']/following-sibling::div//input",
        out : "//p[text()='Punch Out']/following::button[1]",
        dashboard : "//ul//li[.//span[text()='Dashboard']]/a/span",
        assignleave: "//p[text()='Assign Leave']/following::button[1]//path",
        arrow: "//input[@placeholder='hh:mm']/following::i[contains(@class,'minute-input-down')]"
    }

    async clickonclock(){
        await this.base.waitAndClick(this.Elements.clockicon);
    }

    async TimeInsert(){
        await this.base.waitAndClick(this.Elements.timeinsert);
    }

    async clickarrow(){
        await this.base.waitAndClick(this.Elements.arrow);
    }

    async  out(){
        await this.base.waitAndClick(this.Elements.out);
    }

    
}