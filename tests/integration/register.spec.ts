import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import prepareRandomUser from "../../src/factories/user.factory";

test.describe("User Registration Tests", () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    await authPage.navigateToRegister();
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
    await expect(authPage.emailInvalidFormatMessage).toBeVisible();
  });

  test("User cannot register with an empty email", async ({}) => {
    // Arrange
    const invalidUserData = prepareRandomUser();
    invalidUserData.email = '';

    // Act
    await authPage.registerToApp(invalidUserData);

    // Assert
    await expect(authPage.emailRequiredMessage).toBeVisible();
  });


  test("User cannot register with mismatched passwords", async ({page}) => {
    // Arrange
    const newUserData = prepareRandomUser();
    const mismatchedPassword = "differentPassword";

    // Act
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(newUserData.password);
    await authPage.repeatPasswordInput.fill(mismatchedPassword);
    await authPage.agreementCheckbox.click();

    // Assert
    await expect(page.locator("input#input-re-password")).toHaveClass(/status-danger/);
    //1 password validation is missing
  });

  test("User cannot register with a short password", async () => {
    // Arrange
    const newUserData = prepareRandomUser();
    newUserData.password = '123'; //2 there is no validation in the repeat password field

    // Act
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(newUserData.password);
    await authPage.agreementCheckbox.click();

    // Assert
    await expect(authPage.passwordInvalidFormatMessage).toBeVisible();
  });

  test("User cannot register with empty password", async () => {
    // Arrange
    const newUserData = prepareRandomUser();
    const emptyPassword = '';

    // Act
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(emptyPassword);
    await authPage.agreementCheckbox.click();

    // Assert
    await expect(authPage.passwordRequiredMessage).toBeVisible();
  });

  test("User cannot register without repeating the password", async () => {
    // Arrange
    const newUserData = prepareRandomUser();
    const emptyRepeatPassword = '';

    // Act
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(newUserData.password);
    await authPage.repeatPasswordInput.fill(emptyRepeatPassword);
    await authPage.agreementCheckbox.click();

    // Assert
    await expect(authPage.passwordRepeatRequiredMessage).toBeVisible();
  });

  test("User cannot register without accepting the terms and conditions", async () => {
    // Arrange
    const newUserData = prepareRandomUser();

    // Act
    await authPage.fullNameInput.fill(newUserData.fullName);
    await authPage.emailInput.fill(newUserData.email);
    await authPage.passwordInput.fill(newUserData.password);
    await authPage.repeatPasswordInput.fill(newUserData.password);

    // Assert
    await expect(authPage.registerButton).toBeDisabled();//3 there is no validation for not marking consents
  });
});