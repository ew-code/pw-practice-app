import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../src/pages/dashboard.page';

test.describe("Dashboard Smoke Tests", () => {
  let dashboardPage: DashboardPage;


  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
  });


  test("IoT dashboard link and user profile name should be displayed", async ({ page }) => {
    // Act:
    await dashboardPage.navigateTo();

    // Assert:
    await expect(dashboardPage.iotDashboardLink).toBeVisible();
    await expect(dashboardPage.userProfileName).toBeVisible();
    });
  });

