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
    await page.setViewportSize({ width: 1920, height: 1080 }); 
  });

  test.afterEach(async () => {
    await authPage.logOut();// 1) after clicking log out nothing happens 
  });

test("User can log in and check security cameras", async () => {

    await test.step("Log in with the new user", async () => {
      await authPage.logInUser(appLoginCredentials);
    });
  
    await test.step("Check all security cameras are visible", async () => {
      await dashboardPage.checkAllCamerasVisible();
   });
});

test("User can view Electricity Consumption for January in different years", async ({page}) => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const yearMinus10 = (currentYear - 10).toString();
    const yearMinus9 = (currentYear - 9).toString();
    const yearMinus8 = (currentYear - 8).toString();

    await test.step("Log in with the new user", async () => {
        await authPage.logInUser(appLoginCredentials);
      });

    await test.step("Check Electricity Consumption for January 10 years ago", async () => {
      await dashboardPage.checkElectricityConsumption(yearMinus10, '0.97 816 kWh / 97 USD');
    });

    await test.step("Check Electricity Consumption for January 9 years ago", async () => {
      await dashboardPage.checkElectricityConsumption(yearMinus9, '1.56 789 kWh / 91 USD');
    });

    await test.step("Check Electricity Consumption for January 8 years ago", async () => {
      await dashboardPage.checkElectricityConsumption(yearMinus8, '1.34 789 kWh / 91 USD');
    });
  });

test("User can register, log in, perform actions on core widgets", async () => {

    await test.step("Register and log in with a new user", async () => {
      await authPage.registerAndLogInUser(appLoginCredentials);
  });

    await test.step("Interact with IoT dashboard widgets", async () => {
      await dashboardPage.toggleLightSwitch();
      await dashboardPage.toggleRollerShades();
      await dashboardPage.toggleAudio();
      await dashboardPage.toggleCoffeeMaker();
   });
});
});
