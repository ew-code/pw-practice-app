import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import prepareRandomUser from "../../src/factories/user.factory";
import { af } from "@faker-js/faker/dist/airline-CBNP41sR";

test.describe("User Registration Tests", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });

test.afterEach(async ({}) => {
  await authPage.logOut();
});

  test("User can register with valid data", async ({ page }) => {
    // Arrange
    const newUserData = prepareRandomUser();

    // Act
    await authPage.registerToApp(newUserData);

    // Assert
    await expect(authPage.headerFullNameLocator).toBeVisible();
    
  });
});