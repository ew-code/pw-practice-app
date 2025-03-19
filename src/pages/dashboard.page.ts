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

    firstCamera = this.page.locator('text=Camera #1');
    secondCamera = this.page.locator('text=Camera #2');
    thirdCamera = this.page.locator('text=Camera #3');
    fourthCamera = this.page.locator('text=Camera #4');
  
    constructor(protected page: Page) {
      super(page);
    }
  
    async navigateTo(): Promise<void> {
        await this.page.goto(this.url);
    }

    async toggleLightSwitch() {
      if (await this.lightOnText.isVisible()) {
          await this.lightOnText.click();
          await expect(this.lightOffText).toBeVisible();
      } else {
          await this.lightOffText.click();
          await expect(this.lightOnText).toBeVisible();
      }
  }
  
  async toggleRollerShades() {
      if (await this.rollerShadesOnText.isVisible()) {
          await this.rollerShadesOnText.click();
          await expect(this.rollerShadesOffText).toBeVisible();
      } else {
          await this.rollerShadesOffText.click();
          await expect(this.rollerShadesOnText).toBeVisible();
      }
  }
  
  async toggleAudio() {
      if (await this.audioOnText.isVisible()) {
          await this.audioOnText.click();
          await expect(this.audioOffText).toBeVisible();
      } else {
          await this.audioOffText.click();
          await expect(this.audioOnText).toBeVisible();
      }
  }
  
  async toggleCoffeeMaker() {
      if (await this.coffeeMakerOnText.isVisible()) {
          await this.coffeeMakerOnText.click();
          await expect(this.coffeeMakerOffText).toBeVisible();
      } else {
          await this.coffeeMakerOffText.click();
          await expect(this.coffeeMakerOnText).toBeVisible();
      }
  }

      async checkAllCamerasVisible() {
        const cameras = [
          this.firstCamera,
          this.secondCamera,
          this.thirdCamera,
          this.fourthCamera,
        ];
      
        await Promise.all(
          cameras.map(async (camera) => {
            await expect(camera).toBeVisible();
          })
        );
      }
}
