import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../src/pages/dashboard.page';

test.describe("Dashboard Functional Tests", () => {
  let dashboardPage: DashboardPage;


  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateTo();
  });

      test('User can toggle the light on and off', async () => {
        await dashboardPage.lightSwitchOff();
        await dashboardPage.lightSwitchOn();
      });

      test('User can toggle roller shades on and off', async () => {
        await dashboardPage.rollerShadesOff();
        await dashboardPage.rollerShadesOn();
      });
});
  
