import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";


export class DashboardPage extends BasePage {
    url = `${process.env.BASE_URL}/pages/iot-dashboard`;

    iotDashboardLink = this.page.getByRole('link', { name: 'IoT Dashboard' })
    userProfileName = this.page.locator('ngx-header').getByText('Nick Jones')
    lightText = this.page.locator('ngx-dashboard').getByText('Light')
    lightOffText = this.page.getByText('LightOFF');
    lightOnText = this.page.getByText('LightON');
    rollerShadesText = this.page.getByText('Roller Shades')
    wirelessAudioText = this.page.getByText('Wireless Audio');
    coffeeMakerText = this.page.getByText('Coffee Maker');
    roomManagementText = this.page.getByText('Room Management');
  
    constructor(protected page: Page) {
      super(page);
    }
  
    async navigateTo(): Promise<void> {
        await this.page.goto(this.url);
    }

    async lightSwitchOff() {
        await this.lightOnText.click();
        await expect(this.lightOffText).toBeVisible();
      }

      async lightSwitchOn() {
        await this.lightOffText.click();
        await expect(this.lightOnText).toBeVisible();
      }
}
