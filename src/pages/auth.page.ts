import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { LoginUserModel } from "../models/user.model";

export class AuthPage extends BasePage {
    loginUrl = `${process.env.BASE_URL}/auth/login`;
    emailInput = this.page.locator('#input-email');
    passwordInput = this.page.locator('#input-password');
    loginButton = this.page.getByRole('button', { name: 'Log In' });
   
    constructor(protected page: Page) {
      super(page);
    }
  
    async navigateToLogin(): Promise<void> {
        await this.page.goto(this.loginUrl);
    }

    async loginToApp(appLoginCredentials: LoginUserModel): Promise<void> {
        await this.navigateToLogin();
        await this.emailInput.pressSequentially(appLoginCredentials.userEmail);
        await this.passwordInput.pressSequentially(appLoginCredentials.password);
        await this.passwordInput.press('Enter');
    }
}