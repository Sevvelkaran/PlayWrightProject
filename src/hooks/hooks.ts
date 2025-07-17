  import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
  import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
  import { pageFixture } from '../hooks/pageFixture';
  import { Timer } from '../helper/timer';
  import { getEnv } from '../helper/env/env';
import { invokeBrowser } from '../helper/browsers/browserManager';
import { createLogger } from 'winston';
import { options } from '../helper/util/logger';
  let browser: Browser;
  let context:BrowserContext;

  BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
    Timer.setStartTime();

  });

  Before(async function (pickle) {
    const scenarioName = pickle.pickle.name + pickle.pickle.id;
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
    pageFixture.logger.info(`Scenario started: ${scenarioName}`);
  });

  After(async function ({pickle,result}) {
    console.log(result?.status);
    if (result?.status == Status.FAILED && pageFixture.page) {
      const screenshot = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type: 'png'});
      this.attach(screenshot, 'image/png');
    }
    if (pageFixture.page) {
      await pageFixture.page.close();
    }
    await context.close();
  });
  
  AfterAll(async function () {
    await browser.close();
    await pageFixture.logger?.close();
  });
