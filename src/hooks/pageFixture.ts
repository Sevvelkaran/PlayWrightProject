// import { Page } from '@playwright/test';
// import { Logger} from 'winston';
// export const pageFixture = {
//   page: undefined as Page | undefined,
//   logger: undefined as Logger | undefined

// };

import { Page } from '@playwright/test';
import { Logger } from 'winston';
import LoginPage from '../test/pages/loginpage';
import SubmitClaimPage from '../test/pages/SubmitClaimPage';
export const pageFixture = {
  page: undefined as Page | undefined,
  logger: undefined as Logger | undefined,
  loginPage: undefined as LoginPage | undefined,
  submitClaimPage: undefined as SubmitClaimPage | undefined

};
