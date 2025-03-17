import test from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import { appLoginCredentials } from "../../src/test-data/login.data";

test.describe("Login tests", () => {
  let authPage: AuthPage;


  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });


test('Login to App with existing user', async ({ page }) => {
    await authPage.loginToApp(appLoginCredentials);
    await page.locator('ngx-header').getByText('Nick Jones').click();
    await page.getByTitle('Log out').click();
  });
});