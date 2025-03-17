import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class AuthPage extends BasePage {
    loginUrl = `${process.env.BASE_URL}/auth/login`;
    
   
    constructor(protected page: Page) {
      super(page);
    }
  
    async navigateToLogin(): Promise<void> {
        await this.page.goto(this.loginUrl);
    }
}