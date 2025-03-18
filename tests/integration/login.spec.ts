import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import { appLoginCredentials } from "../../src/test-data/login.data";

test.describe("Login tests", () => {
  let authPage: AuthPage;


  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });

  test.afterEach(async ({}) => {
    await authPage.logOut();
  });

test('Login to App with existing user', async ({}) => {
    await authPage.loginToApp(appLoginCredentials);
    await expect(authPage.headerFullNameLocator).toBeVisible();
  });
});