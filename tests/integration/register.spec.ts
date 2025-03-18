import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import prepareRandomUser from "../../src/factories/user.factory";

test.describe("User Registration Tests", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });

  test("User can register with valid data", async ({}) => {
    // Arrange
    const newUserData = prepareRandomUser();

    // Act
    await authPage.registerToApp(newUserData);
    await authPage.registerButton.click();

    // Assert
    await expect(authPage.headerFullNameLocator).toBeVisible();
    await authPage.logOut();
  });

  test("User cannot register with an invalid email", async ({}) => {
    // Arrange
    const invalidUserData = prepareRandomUser();
    invalidUserData.email = "invalid-email";

    // Act
    await authPage.registerToApp(invalidUserData);

    // Assert
    await expect(authPage.emailErrorMessage).toBeVisible();
  });


});