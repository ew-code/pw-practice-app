import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import prepareRandomUser from "../../src/factories/user.factory";

test.describe("User Registration Tests", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });

  test("User can register with valid data", async ({ page }) => {
    // ARRANGE
    const newUserData = prepareRandomUser();

    // ACT
    await authPage.registerToApp(newUserData);

    // ASSERT
    await expect(authPage.headerFullNameLocator).toBeVisible();
  });
});