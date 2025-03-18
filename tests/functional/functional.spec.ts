import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../src/pages/dashboard.page';

test.describe("Dashboard Functional Tests", () => {
  let dashboardPage: DashboardPage;


  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateTo();
  });

      test('User can toggle the light off and on', async () => {
        await dashboardPage.lightSwitchOff();
        await dashboardPage.lightSwitchOn();
      });

      test('User can toggle roller shades off and on', async () => {
        await dashboardPage.rollerShadesOff();
        await dashboardPage.rollerShadesOn();
      });

      test('User can toggle the audio off and on', async () => {
        await dashboardPage.audioOff();
        await dashboardPage.audioOn();
      });

      test('User can toggle coffee maker off and on', async () => {
        await dashboardPage.coffeeMakerOff();
        await dashboardPage.coffeeMakerOn();
      });
});
  
