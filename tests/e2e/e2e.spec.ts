import test, { expect } from "@playwright/test";
import { AuthPage } from "../../src/pages/auth.page";
import { DashboardPage } from "../../src/pages/dashboard.page";
import prepareRandomUser from "../../src/factories/user.factory";
import { appLoginCredentials } from "../../src/test-data/login.data";

test.describe("End-to-End Tests", () => {
  let authPage: AuthPage;
  let dashboardPage: DashboardPage;
  const loginCredentials = appLoginCredentials;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test.afterEach(async () => {
    await authPage.logOut();//after clicking log out nothing happens
  });

test("User can log in, check security cameras", async () => {

    await test.step("Log in with the new user", async () => {
      await authPage.logInUser(appLoginCredentials);
    });
  
    await test.step('Check security cameras', async () => {
      await dashboardPage.checkAllCamerasVisible();
   });
});

  
test("User can register, log in, perform actions on core widgets", async () => {

    await test.step("Register and log in with a new user", async () => {
      await authPage.registerAndLogInUser(appLoginCredentials);
  });

    await test.step('Perform actions on the dashboard', async () => {
      await dashboardPage.toggleLightSwitch();
      await dashboardPage.toggleRollerShades();
      await dashboardPage.toggleAudio();
      await dashboardPage.toggleCoffeeMaker();
   });
});
});
