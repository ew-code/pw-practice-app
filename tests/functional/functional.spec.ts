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
        await expect(dashboardPage.lightOn).toBeVisible();
      });

      test('User can toggle roller shades off and on', async () => {
        await dashboardPage.rollerShadesOff();
        await dashboardPage.rollerShadesOn();
        await expect(dashboardPage.rollerShadesOnText).toBeVisible();
      });

      test('User can toggle the audio off and on', async () => {
        await dashboardPage.audioOff();
        await dashboardPage.audioOn();
        await expect(dashboardPage.audioOnText).toBeVisible();
      });

      test('User can toggle coffee maker off and on', async () => {
        await dashboardPage.coffeeMakerOff();
        await dashboardPage.coffeeMakerOn();
        await expect(dashboardPage.coffeeMakerOnText).toBeVisible();
      });
});
  
