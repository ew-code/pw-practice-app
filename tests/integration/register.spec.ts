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

  test("User cannot register with mismatched passwords", async ({page}) => {
    // Arrange
    const newUserData = prepareRandomUser();
    const mismatchedPassword = "differentPassword";

    // Act
    await authPage.navigateToRegister();
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(newUserData.password);
    await authPage.repeatPasswordInput.fill(mismatchedPassword);
    await authPage.agreementCheckbox.click();

    // Assert
    await expect(page.locator("input#input-re-password")).toHaveClass(/status-danger/);//password validation is missing
  });

  test("User cannot register without accepting the terms and conditions", async () => {
    // Arrange
    const newUserData = prepareRandomUser();

    // Act
    await authPage.navigateToRegister();
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(newUserData.password);
    await authPage.repeatPasswordInput.fill(newUserData.password);

    // Assert
    await expect(authPage.registerButton).toBeDisabled();//there is no validation for not marking consents
  });
});