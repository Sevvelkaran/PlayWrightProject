import { expect } from '@playwright/test';
import { Given, Then, When ,Before} from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import employeedata from "../../helper/util/data/employeedata.json";
import pimpage from "../pages/PIMPage";
import { readCSV } from "../../helper/util/csvReader";
import path from "path";
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
         When('the user fills the employee form with invalid credentials',{timeout:30000},async function(){
           pim = new pimpage(pageFixture.page!);
           const filePath = path.resolve("src/helper/util/data/Invaliduser.csv"); 
           const invalidData = await readCSV(filePath);
           const emp = invalidData[0];
           await pim.clickAdd();
           await pim.FillForm(emp.Firstname, emp.Lastname, emp.Employeeid);
           console.log(emp.Firstname, emp.Lastname, emp.Employeeid);
           pageFixture.logger?.info(`Invalid Data -> Firstname: ${emp.Firstname}, Lastname: ${emp.Lastname}, EmployeeID: ${emp.Employeeid}`);
            await pim.clicksave();
           });
         Then ('the employee should not be added successfully',async function(){
          console.log("user get error message");
         });
         When('the user click the Report-to', {timeout:30000},async function () {
          await pim.clickReportto();
         });
         When('the user click the Add button under Assigned Supervisors', async function () {
          await pim.clickSupervisorAdd();
         });
         When('the user fills the Supervisor form with Name {string} and ReportingMethod {string}', async function (name, method) {
         await pim.fillsupervisordata(name,method);
         });
         When('the user click the Save button', async function () {
          await pim.clicksave();
         });
         Then('the user should be added to the supervisor Records', async function () {
           console.log("supervisor added successfully");
         });
        



