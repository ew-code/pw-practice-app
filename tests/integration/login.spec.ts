import test from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";

test.describe("Login tests", () => {
  let authPage: AuthPage;


  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });


test('Login to App with existing user', async ({ page }) => {
    await authPage.navigateToLogin();

  await page.getByRole('textbox', { name: 'Email address:' }).fill('testowe123@iceo.co');

  await page.getByRole('textbox', { name: 'Password:' }).fill('123333');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('ngx-header').getByText('Nick Jones').click();
  await page.getByTitle('Log out').click();
  });
});