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
    rollerShadesOnText = this.page.getByText('Roller ShadesON')
    rollerShadesOffText = this.page.getByText('Roller ShadesOFF')
    wirelessAudioText = this.page.getByText('Wireless Audio');
    audioOnText = this.page.getByText('AudioON');
    audioOffText = this.page.getByText('AudioOFF');
    coffeeMakerText = this.page.getByText('Coffee Maker');
    coffeeMakerOnText = this.page.getByText('Coffee MakerON');
    coffeeMakerOffText = this.page.getByText('Coffee MakerOFF');
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

      async rollerShadesOff() {
        await this.rollerShadesOnText.click();
        await expect(this.rollerShadesOffText).toBeVisible();
      }

      async rollerShadesOn() {
        await this.rollerShadesOffText.click();
        await expect(this.rollerShadesOnText).toBeVisible();
      }

      async audioOff() {
        await this.audioOnText.click();
        await expect(this.audioOffText).toBeVisible();
      }

      async audioOn() {
        await this.audioOffText.click();
        await expect(this.audioOnText).toBeVisible();
      }

      async coffeeMakerOff() {
        await this.coffeeMakerOnText.click();
        await expect(this.coffeeMakerOffText).toBeVisible();
      }

      async coffeeMakerOn() {
        await this.coffeeMakerOffText.click();
        await expect(this.coffeeMakerOnText).toBeVisible();
      }

}
