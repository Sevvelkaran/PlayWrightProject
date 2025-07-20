// pageFixture.ts
import { Page } from "@playwright/test";
import { Logger } from "winston";
import SearchModPage from "../test/pages/SearchModpage";
import SubmitClaimPage from "../test/pages/SubmitClaimPage";
import LoginPage from "../test/pages/loginpage";

const pageFixture = {
  page: undefined as Page | undefined,
  logger: undefined as Logger | undefined,
  searchMod: undefined as SearchModPage | undefined,
  submitClaim: undefined as SubmitClaimPage | undefined,

  loginPage: undefined as LoginPage | undefined
};

export default pageFixture;
