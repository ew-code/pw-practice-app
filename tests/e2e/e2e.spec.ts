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
  
    await test.step('Check all security cameras are visible', async () => {
      await dashboardPage.checkAllCamerasVisible();
   });
});

test("User can view Electricity Consumption for January in different years", async ({page}) => {
    
    await test.step("Log in with the new user", async () => {
        await authPage.logInUser(appLoginCredentials);
      });

    await test.step("Check Electricity Consumption for January 2015", async () => {
      await page.getByRole('link', { name: '2015' }).click();
      await expect(dashboardPage.year2015).toBeVisible();
      await expect(page.getByRole('listitem').filter({ hasText: 'Jan 0.97 816 kWh / 97 USD' }).locator('rect')).toBeVisible();
    });

    await test.step("Check Electricity Consumption for January 2016", async () => {
      await page.getByRole('link', { name: '2016' }).click();
      await expect(dashboardPage.year2016).toBeVisible();
      await expect(page.getByRole('listitem').filter({ hasText: 'Jan 1.56 789 kWh / 91 USD' }).locator('rect')).toBeVisible();
    });

    await test.step("Check Electricity Consumption for January 2017", async () => {
      await page.getByRole('link', { name: '2017' }).click();
      await expect(dashboardPage.year2017).toBeVisible();
      await expect(page.getByRole('listitem').filter({ hasText: 'Jan 1.34 789 kWh / 91 USD' }).locator('path')).toBeVisible();
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
