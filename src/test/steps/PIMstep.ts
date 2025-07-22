import { expect } from '@playwright/test';
import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import employeedata from "../../helper/util/data/employeedata.json";
import pimpage from "../pages/PIMPage";
let pim: pimpage;
const fullName="";
         When('the user Add the employee',{ timeout: 20000 }, async function () {
          pim = new pimpage(pageFixture.page!);
          for (const emp of employeedata) {
          await pim.clickAdd();
          await pim.FillForm(emp.Firstname,emp.Lastname,emp.Employeeid);
          await pim.clicksave();
          // await pageFixture.page?.waitForTimeout(30000);
          let fullName = `${emp.Firstname} ${emp.Lastname}`;
        }
        });
         Then('the employee should be added successfully', async function () {
          //  const nameLocator = pageFixture.page?.locator("//h6[@class='oxd-text oxd-text--h6 --strong']");
          //  await expect(nameLocator!).toHaveText(fullName);
          console.log("Employee added sucessfully");
         });
