import { Page } from "@playwright/test";
import { BasePage } from "./base.page";


export class DashboardPage extends BasePage {
    url = `${process.env.BASE_URL}/pages/iot-dashboard`;
    
    iotDashboardLink = this.page.getByRole('link', { name: 'IoT Dashboard' })
    userProfileName = this.page.locator('ngx-header').getByText('Nick Jones')
  
    constructor(protected page: Page) {
      super(page);
    }
  
    async navigateTo(): Promise<void> {
        await this.page.goto(this.url);
    }
}
