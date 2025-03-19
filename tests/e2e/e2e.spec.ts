import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import { DashboardPage } from "../../src/pages/dashboard.page";
import { appLoginCredentials } from "../../src/test-data/login.data";

test.describe("End-to-End Tests", () => {
  let authPage: AuthPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test.afterEach(async () => {
    await authPage.logOut();// 1) after clicking log out nothing happens
  });

test("User can log in and check security cameras", async () => {

    await test.step("Log in with the new user", async () => {
      await authPage.logInUser(appLoginCredentials);
    });
  
    await test.step('Check all security cameras are visible', async () => {
      await dashboardPage.checkAllCamerasVisible();
   });
});

  
test("User can register, log in, perform actions on core widgets", async () => {

    await test.step("Register and log in with a new user", async () => {
      await authPage.registerAndLogInUser(appLoginCredentials);
  });

    await test.step('Interact with IoT dashboard widgets', async () => {
      await dashboardPage.toggleLightSwitch();
      await dashboardPage.toggleRollerShades();
      await dashboardPage.toggleAudio();
      await dashboardPage.toggleCoffeeMaker();
   });
});
});
