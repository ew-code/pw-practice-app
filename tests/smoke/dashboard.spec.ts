import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../src/pages/dashboard.page';

test.describe("Dashboard Smoke Tests", () => {
  let dashboardPage: DashboardPage;


  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateTo();
  });

    test("All core widgets should be visible on the dashboard", async ({ page }) => {
      await expect(dashboardPage.lightText).toBeVisible();
      await expect(dashboardPage.rollerShadesText).toBeVisible();
      await expect(dashboardPage.wirelessAudioText).toBeVisible();
      await expect(dashboardPage.coffeeMakerText).toBeVisible();
      await expect(dashboardPage.roomManagementText).toBeVisible();
      });
  
    
      test('User can toggle the light on and off', async () => {
        await dashboardPage.lightSwitchOff();
        await dashboardPage.lightSwitchOn();
      });
});
  
