import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";


export class DashboardPage extends BasePage {
    url = `${process.env.BASE_URL}/pages/iot-dashboard`;

    iotDashboardLink = this.page.getByRole('link', { name: 'IoT Dashboard' })
    userProfileName = this.page.locator('ngx-header').getByText('Nick Jones')
    lightText = this.page.locator('ngx-dashboard').getByText('Light')
    lightOff = this.page.getByText('LightOFF');
    lightOn = this.page.getByText('LightON');
    rollerShadesText = this.page.getByText('Roller Shades')
    rollerShadesOnText = this.page.getByText('Roller ShadesON')
    rollerShadesOffText = this.page.getByText('Roller ShadesOFF')
    wirelessAudioText = this.page.getByText('Wireless Audio');
    audioOnText = this.page.getByText('AudioON');
    audioOffText = this.page.getByText('AudioOFF');
    coffeeMakerText = this.page.getByText('Coffee Maker');
    coffeeMakerOnText = this.page.getByText('Coffee MakerON');
    coffeeMakerOffText = this.page.getByText('Coffee MakerOFF');
    
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

    getYearLink(year: string) {
        return this.page.getByRole('link', { name: year });
    }

    async checkElectricityConsumption(year: string, expectedText: string) {
        await this.getYearLink(year).click();
        await expect(this.page.getByRole('listitem').filter({ hasText: `Jan ${expectedText}` })).toBeVisible();
    }

    async lightSwitchOff() {
        await this.lightOn.click();
        await expect(this.lightOff).toBeVisible();
      }
  
      async lightSwitchOn() {
        await this.lightOff.click();
      }

      async rollerShadesOff() {
        await this.rollerShadesOnText.click();
        await expect(this.rollerShadesOffText).toBeVisible();
      }

      async rollerShadesOn() {
        await this.rollerShadesOffText.click();
      }


      async audioOff() {
        await this.audioOnText.click();
        await expect(this.audioOffText).toBeVisible();
      }

      async audioOn() {
        await this.audioOffText.click();
      }

      async coffeeMakerOff() {
        await this.coffeeMakerOnText.click();
        await expect(this.coffeeMakerOffText).toBeVisible();
      }

      async coffeeMakerOn() {
        await this.coffeeMakerOffText.click();
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
