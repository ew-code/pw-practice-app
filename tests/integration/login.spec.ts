import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import { appLoginCredentials } from "../../src/test-data/login.data";

test.describe("User Login Tests", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    await authPage.navigateToLogin();
  });

  test("User can log in with valid credentials", async () => {
    // Arrange
    const loginCredentials = appLoginCredentials;

    // Act
    await authPage.loginToApp(loginCredentials);
    await authPage.loginButton.click();

    // Assert
    await expect(authPage.headerFullNameLocator).toBeVisible();
    await authPage.logOut();
  });

  test("User cannot log in with invalid email", async () => {
    // Arrange
    const invalidCredentials = { ...appLoginCredentials, userEmail: "invalid-email-example.com" };

    // Act
    await authPage.loginToApp(invalidCredentials);

    // Assert
    await expect(authPage.emailInvalidFormatMessage).toBeVisible();
  });

//TODO
  test("User cannot log in with invalid password", async () => {
    // Arrange
    const invalidCredentials = { ...appLoginCredentials, password: "123" };

    // Act
    await authPage.loginToApp(invalidCredentials);

    // Assert
    await expect(authPage.passwordInvalidFormatMessage).toBeVisible();
  });

  test("User cannot log in with empty email", async () => {
    // Arrange
    const invalidCredentials = { ...appLoginCredentials, userEmail: '' };

    // Act
    await authPage.loginToApp(invalidCredentials);

    // Assert
    await expect(authPage.emailRequiredMessage).toBeVisible();
  });
});