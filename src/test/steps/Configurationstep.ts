import { Page } from '@playwright/test';

import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import configurationpage from "../pages/Configurationpage";
import { configDotenv } from 'dotenv';
let configpage:configurationpage;
         When('the user click the PIM menu', { timeout: 20000 },async function () { 
          configpage= new configurationpage(pageFixture.page!);
          await configpage.clickPim();
         });

         When('the user clicks the Configuration menu and then clicks Optional Fields', async function () {
        await configpage.clickConfiguration();
        await configpage.clickoptionalfield();
         });

         When('the user enables the Show Deprecated Fields option', async function () {
           await configpage.enableField();
         });
         When('the user clicks the Save button', async function () {
           await configpage.save();
         });

         Then('the Show Deprecated Fields option should remain enabled', async function () {
           console.log("verified Show Deprecated Fields option should remain enabled");
           await configpage.verifyenabled();
         });

         When('the user clicks the Configuration menu and then clicks Custom Fields', async function () {
           await configpage.clickConfiguration();
           await configpage.clickcustomfield();
           
         });

         When('the user clicks the Add button',{ timeout: 20000 }, async function () {
           await configpage.Addcustomfield();
         });

         When('the user fills out the Add Custom Field form', async function () {
           await configpage.fillform();
         });

         When('the user click the save button', async function () {
           await configpage.savecustomfield();
         });

         Then('the field should be added to the records', async function () {
           console.log("completed cusom field");
         });
         When('the user clicks the Configuration menu and then clicks Reporting methods', async function () {
           await configpage.clickConfiguration();
           await configpage.clickReportingmenu();
         });
         When('the user enters the name of the reporting method', async function () {
           await configpage.enterreportname();
         });
         Then('the reporting method should be added to the list', async function () {
           await configpage.verifyreport();
         });
