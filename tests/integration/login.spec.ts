import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import { appLoginCredentials } from "../../src/test-data/login.data";

test.describe("User Login Tests", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    await authPage.navigateToLogin();
  });

  test.afterEach(async () => {
    await authPage.logOut();
  });

  test("User can log in with valid credentials", async () => {
    // Arrange
    const loginCredentials = appLoginCredentials;

    // Act
    await authPage.loginToApp(loginCredentials);

    // Assert
    await expect(authPage.headerFullNameLocator).toBeVisible();
  });
});